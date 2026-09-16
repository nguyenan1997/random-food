import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES } from '../data/foods'
import { playSpinStart, playTick, playWin } from '../lib/sound'

const FACE_COUNT = 6
const FACE_ANGLE = 360 / FACE_COUNT
const SPIN_MS = 2900

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const categoryMeta = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[0]

function CardFace({ food, radius, width, height }) {
  const cat = categoryMeta(food.category)
  return (
    <div
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] border border-white/90 bg-white shadow-candy"
      style={{
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-candy-50 to-candy-100" />

      <div className="relative flex h-full flex-col items-center justify-center gap-2 px-4 text-center sm:gap-3 sm:px-5">
        <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-candy-600 shadow-sm sm:px-3 sm:py-1 sm:text-[11px]">
          {cat.emoji} {cat.label}
        </span>
        <motion.span
          className="select-none"
          style={{ fontSize: Math.round(height * 0.24), textShadow: '0 10px 18px rgba(245,44,138,0.28)' }}
          animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {food.emoji}
        </motion.span>
        <h3 className="font-display text-lg font-extrabold leading-tight text-plum-800 sm:text-2xl">
          {food.name}
        </h3>
        <p className="line-clamp-3 text-[11px] leading-snug text-plum-700/75 sm:text-[13px]">{food.desc}</p>
        <span className="mt-1 rounded-full bg-gradient-to-r from-candy-400 to-candy-600 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-sm sm:px-3 sm:py-1 sm:text-xs">
          {food.price}
        </span>
      </div>
    </div>
  )
}

export default function FoodReel3D({ foods, onResult, onSpinStart, soundOn, rolling, setRolling, spinRef }) {
  const [rotation, setRotation] = useState(0)
  const [faces, setFaces] = useState(() => shuffle(foods).slice(0, FACE_COUNT))
  const [size, setSize] = useState({ w: 300, h: 400 })
  const timers = useRef([])
  const boxRef = useRef(null)

  // --- responsive sizing ---
  useEffect(() => {
    const measure = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const w = Math.max(196, Math.min(320, vw * 0.6))
      const h = Math.max(258, Math.min(420, vh * 0.44, w * 1.32))
      setSize({ w, h })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const radius = Math.round(size.w / 2 / Math.tan(Math.PI / FACE_COUNT)) + 18

  // keep faces fresh when the pool changes while we're idle
  const rollingRef = useRef(rolling)
  useEffect(() => {
    rollingRef.current = rolling
  }, [rolling])

  useEffect(() => {
    if (rollingRef.current) return
    setFaces(shuffle(foods).slice(0, FACE_COUNT))
  }, [foods])

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current.forEach(clearInterval)
    timers.current = []
  }, [])

  useEffect(() => () => clearTimers(), [clearTimers])

  const spin = useCallback(() => {
    if (rolling) return
    if (!foods.length) return

    clearTimers()
    setRolling(true)
    if (soundOn) playSpinStart()
    onSpinStart?.()

    const winner = foods[Math.floor(Math.random() * foods.length)]
    const landing = Math.floor(Math.random() * FACE_COUNT)

    // build target rotation so `landing` face ends up facing the camera
    const base = Math.ceil(rotation / 360) * 360 + 360 * 5
    const target = base + ((360 - ((landing * FACE_ANGLE) % 360)) % 360)

    setRotation(target)
    setFaces(shuffle(foods).slice(0, FACE_COUNT))

    // shuffle faces while spinning for that infinite "slot" feel
    const shuffleInterval = setInterval(() => {
      setFaces(shuffle(foods).slice(0, FACE_COUNT))
      if (soundOn) playTick()
    }, 110)
    timers.current.push(shuffleInterval)

    // reveal the winner just before the reel stops
    const reveal = setTimeout(() => {
      clearInterval(shuffleInterval)
      const others = shuffle(foods.filter((f) => f.id !== winner.id)).slice(0, FACE_COUNT - 1)
      const next = [...others]
      next.splice(landing, 0, winner)
      setFaces(next.slice(0, FACE_COUNT))
    }, SPIN_MS - 620)
    timers.current.push(reveal)

    const done = setTimeout(() => {
      setRolling(false)
      onResult(winner)
      if (soundOn) playWin()
    }, SPIN_MS)
    timers.current.push(done)
  }, [foods, onResult, onSpinStart, rolling, rotation, setRolling, soundOn, clearTimers])

  useEffect(() => {
    if (spinRef) spinRef.current = spin
    return () => {
      if (spinRef) spinRef.current = null
    }
  }, [spin, spinRef])

  const empty = !foods.length

  return (
    <div ref={boxRef} className="relative flex w-full flex-col items-center">
      {/* vệt sáng sau trống — gradient tĩnh thay cho element blur 70px */}
      <div
        className="pointer-events-none absolute top-8 h-56 w-56 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,124,191,0.35) 0%, rgba(255,124,191,0) 70%)',
        }}
      />

      {/* Trống 3D rộng hơn màn điện thoại nên cho tràn ra rồi cắt ở mép màn
          hình. Không dùng mask-image nữa vì mask trên cả vùng 3D rất tốn GPU. */}
      <div className="relative -mx-4 w-auto overflow-x-clip sm:mx-0 sm:overflow-x-visible">
        <div
          className="scene relative flex items-center justify-center"
          style={{ height: size.h + 40, width: '100%' }}
        >
          <motion.div
            className="relative preserve-3d"
            style={{ width: size.w, height: size.h }}
            animate={{ rotateY: rotation }}
            transition={{ duration: SPIN_MS / 1000, ease: [0.12, 0.72, 0.06, 1] }}
          >
            {faces.map((food, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${i * FACE_ANGLE}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                <CardFace food={food} radius={radius} width={size.w} height={size.h} />
              </div>
            ))}
          </motion.div>

          {/* floor shadow */}
          <div
            className="pointer-events-none absolute bottom-1 rounded-[50%] bg-plum-900/10 transition-opacity"
            style={{ width: size.w * 0.9, height: 20, opacity: rolling ? 0.6 : 0.35 }}
          />
        </div>
      </div>

      {/* SPIN BUTTON */}
      <div className="relative -mt-2">
        <motion.button
          type="button"
          onClick={spin}
          disabled={rolling || empty}
          whileHover={rolling || empty ? undefined : { scale: 1.05, y: -3 }}
          whileTap={rolling || empty ? undefined : { scale: 0.94, y: 2 }}
          className={`group relative overflow-hidden rounded-full bg-gradient-to-b from-candy-400 via-candy-500 to-candy-700 px-8 py-3.5 font-display text-lg font-extrabold text-white shadow-glow transition disabled:cursor-not-allowed sm:px-9 sm:py-4 sm:text-xl ${
            rolling || empty ? 'opacity-70 saturate-50' : ''
          }`}
          aria-label="Quay chọn món"
        >
          <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-white/25" />
          <span className="relative flex items-center gap-2">
            <motion.span
              animate={rolling ? { rotate: 360 } : { rotate: 0 }}
              transition={rolling ? { duration: 0.7, repeat: Infinity, ease: 'linear' } : {}}
              className="text-xl sm:text-2xl"
            >
              {rolling ? '🎡' : '💗'}
            </motion.span>
            {empty ? 'Hết món rồi!' : rolling ? 'Đang quay...' : 'QUAY NGAY'}
          </span>
        </motion.button>
        {!rolling && !empty && (
          <span className="pointer-events-none absolute -inset-2 -z-10 animate-heartbeat rounded-full border-2 border-candy-400/40" />
        )}
      </div>

      <p className="mt-3 max-w-[16rem] text-center text-xs font-semibold text-plum-700/70 sm:max-w-none sm:text-sm">
        {empty ? 'Thử bỏ bớt bộ lọc nhé 💭' : `Đang có ${foods.length} món trong vòng quay ✨`}
      </p>

      <AnimatePresence>
        {rolling && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-candy-500"
          >
            random magic
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
