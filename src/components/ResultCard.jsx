import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const catLabel = {
  'mon-nuoc': 'Món nước',
  'mon-kho': 'Món khô & Cơm',
  'an-vat': 'Ăn vặt',
  'nuong-lau': 'Nướng & Lẩu',
  'trang-mieng': 'Tráng miệng',
  'do-uong': 'Đồ uống',
  banh: 'Bánh ngọt',
}

export default function ResultCard({ food, onSpinAgain, isFavorite, onToggleFavorite, onAccept, accepted }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 220, damping: 22 })
  const shineX = useTransform(mx, [-0.5, 0.5], ['15%', '85%'])
  const shineY = useTransform(my, [-0.5, 0.5], ['15%', '85%'])

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  if (!food) return null

  return (
    <div className="scene w-full max-w-md" style={{ perspective: 1100 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial={{ opacity: 0, scale: 0.85, rotateY: -25, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-[28px] border border-white/90 bg-white/95 p-5 shadow-candy sm:rounded-[32px] sm:p-6"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[32px]">
          {/* Gradient tĩnh + vệt sáng chạy theo chuột, đều không dùng blur */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(120% 90% at 84% 0%, rgba(255,204,230,0.75) 0%, rgba(255,204,230,0) 62%)',
            }}
          />
          <motion.div
            className="absolute h-48 w-48 rounded-full"
            style={{
              left: shineX,
              top: shineY,
              translateX: '-50%',
              translateY: '-50%',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 68%)',
            }}
          />
        </div>

        <div className="relative" style={{ transform: 'translateZ(48px)' }}>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-gradient-to-r from-candy-400 to-candy-600 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
              {catLabel[food.category] || 'Món ngon'}
            </span>
            <button
              type="button"
              onClick={onToggleFavorite}
              aria-label="Lưu vào yêu thích"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-2xl shadow-soft transition hover:scale-110 active:scale-90"
            >
              <motion.span animate={isFavorite ? { scale: [1, 1.35, 1] } : {}} transition={{ duration: 0.4 }}>
                {isFavorite ? '💖' : '🤍'}
              </motion.span>
            </button>
          </div>

          <motion.div
            className="mt-4 text-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="select-none text-[68px] leading-none sm:text-[86px]"
              style={{ textShadow: '0 14px 22px rgba(245,44,138,0.32)' }}
            >
              {food.emoji}
            </span>
          </motion.div>

          <h2 className="mt-3 text-center font-display text-[26px] font-extrabold leading-tight text-plum-800 sm:text-[34px]">
            {food.name}
          </h2>

          <p className="mt-2 text-center text-[13px] leading-relaxed text-plum-700/80 sm:text-sm">{food.desc}</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-candy-100 px-3 py-1 text-[11px] font-bold text-candy-700 sm:text-xs">
              💸 {food.price}
            </span>
            {food.areas.map((a) => (
              <span
                key={a}
                className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-plum-700 shadow-sm sm:text-xs"
              >
                📍 {a}
              </span>
            ))}
          </div>

          {food.spots?.length > 0 && (
            <div className="mt-4 rounded-2xl bg-white/70 p-3 text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-candy-500">Gợi ý quán</p>
              <p className="mt-1 text-sm font-semibold text-plum-700">{food.spots.join(' • ')}</p>
            </div>
          )}

          {food.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {food.tags.map((t) => (
                <span key={t} className="rounded-full bg-plum-800/5 px-2.5 py-0.5 text-[11px] font-semibold text-plum-700/70">
                  #{t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex gap-2 sm:gap-3" style={{ transform: 'translateZ(30px)' }}>
            <motion.button
              type="button"
              onClick={onSpinAgain}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 whitespace-nowrap rounded-2xl border-2 border-candy-300 bg-white/80 py-3 font-display text-sm font-extrabold text-candy-600 shadow-soft sm:text-base"
            >
              🔄 Quay lại
            </motion.button>
            <motion.button
              type="button"
              onClick={onAccept}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 whitespace-nowrap rounded-2xl py-3 font-display text-sm font-extrabold text-white shadow-candy sm:text-base ${
                accepted ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-candy-500 to-candy-700'
              }`}
            >
              {accepted ? '✅ Đã chốt!' : '💘 Chốt món này'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <p className="mt-3 text-center text-xs font-semibold text-plum-700/55">
        Lia chuột / nghiêng máy để thấy thẻ 3D ✨
      </p>
    </div>
  )
}
