import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Background from './components/Background'
import Confetti from './components/Confetti'
import FilterBar from './components/FilterBar'
import FoodReel3D from './components/FoodReel3D'
import ResultCard from './components/ResultCard'
import SavedPanel from './components/SavedPanel'
import { FOODS, filterFoods } from './data/foods'
import useLocalStorage from './hooks/useLocalStorage'

const byIds = (ids) => ids.map((id) => FOODS.find((f) => f.id === id)).filter(Boolean)

export default function App() {
  const [category, setCategory] = useState('all')
  const [area, setArea] = useState('all')
  const [search, setSearch] = useState('')

  const [rolling, setRolling] = useState(false)
  const [result, setResult] = useState(null)
  const [accepted, setAccepted] = useState(false)
  const [confetti, setConfetti] = useState(0)

  const [favoriteIds, setFavoriteIds] = useLocalStorage('ari-food-favs', [])
  const [historyIds, setHistoryIds] = useLocalStorage('ari-food-history', [])
  const [soundOn, setSoundOn] = useLocalStorage('ari-food-sound', true)

  const spinRef = useRef(null)
  const resultRef = useRef(null)

  const foods = useMemo(() => filterFoods({ category, area, search }), [category, area, search])
  const favorites = useMemo(() => byIds(favoriteIds), [favoriteIds])
  const history = useMemo(() => byIds(historyIds), [historyIds])

  const handleResult = useCallback(
    (food) => {
      setResult(food)
      setAccepted(false)
      setConfetti((n) => n + 1)
      setHistoryIds((prev) => [food.id, ...prev.filter((id) => id !== food.id)].slice(0, 15))
    },
    [setHistoryIds],
  )

  const handleSpinAgain = useCallback(() => {
    spinRef.current?.()
  }, [])

  const toggleFavorite = useCallback(
    (food) => {
      setFavoriteIds((prev) =>
        prev.includes(food.id) ? prev.filter((id) => id !== food.id) : [food.id, ...prev],
      )
    },
    [setFavoriteIds],
  )

  const resetFilters = useCallback(() => {
    setCategory('all')
    setArea('all')
    setSearch('')
  }, [])

  // Trên điện thoại: sau khi trống dừng, kéo thẻ kết quả vào giữa màn hình.
  useEffect(() => {
    if (!result || rolling) return
    if (window.innerWidth >= 1024) return
    const t = setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 150)
    return () => clearTimeout(t)
  }, [result, rolling])

  return (
    <div className="relative min-h-screen">
      <Background />
      <Confetti trigger={confetti} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
        {/* ------------------------------- HEADER ------------------------------- */}
        <header className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <motion.span
              className="text-3xl sm:text-5xl"
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              🍜
            </motion.span>
            <h1 className="font-display text-[30px] font-extrabold leading-none sm:text-6xl">
              <span className="text-gradient">Ăn Gì Hôm Nay?</span>
            </h1>
            <motion.span
              className="text-3xl sm:text-5xl"
              animate={{ rotate: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              💕
            </motion.span>
          </motion.div>

          <p className="mx-auto mt-3 max-w-xl px-1 text-[13px] font-semibold leading-relaxed text-plum-700/75 sm:text-base">
            Cả kho món ngon Hà Nội trong một vòng quay. Không phải nghĩ, chỉ cần quay — rồi để em chọn cho anh nhaaa 🥰
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-candy-500">
            <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">{FOODS.length} món ngon</span>
            <span className="rounded-full bg-white/70 px-3 py-1 shadow-sm">12 quận Hà Nội</span>
            <button
              type="button"
              onClick={() => setSoundOn((s) => !s)}
              className="rounded-full bg-white/70 px-3 py-1 shadow-sm transition hover:bg-white"
              aria-label="Bật tắt âm thanh"
            >
              {soundOn ? '🔊 Âm thanh: BẬT' : '🔇 Âm thanh: TẮT'}
            </button>
          </div>
        </header>

        {/* ------------------------------- FILTERS ------------------------------ */}
        <div className="mt-6">
          <FilterBar
            category={category}
            setCategory={setCategory}
            area={area}
            setArea={setArea}
            search={search}
            setSearch={setSearch}
            count={foods.length}
            onReset={resetFilters}
          />
        </div>

        {/* -------------------------------- STAGE ------------------------------- */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
          <section className="flex w-full min-w-0 flex-col items-center">
            <FoodReel3D
              foods={foods}
              onResult={handleResult}
              soundOn={soundOn}
              rolling={rolling}
              setRolling={setRolling}
              spinRef={spinRef}
            />
          </section>

          <section ref={resultRef} className="relative z-10 flex w-full min-w-0 flex-col items-center gap-6">
            <AnimatePresence mode="wait">
              {result ? (
                <ResultCard
                  key={result.id}
                  food={result}
                  isFavorite={favoriteIds.includes(result.id)}
                  onToggleFavorite={() => toggleFavorite(result)}
                  onSpinAgain={handleSpinAgain}
                  onAccept={() => setAccepted(true)}
                  accepted={accepted}
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass flex w-full max-w-md flex-col items-center rounded-[28px] px-6 py-12 text-center shadow-soft sm:rounded-[32px] sm:px-8 sm:py-14"
                >
                  <motion.span
                    className="text-5xl sm:text-6xl"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    🥡
                  </motion.span>
                  <h2 className="mt-4 font-display text-xl font-extrabold text-plum-800 sm:text-2xl">
                    Sẵn sàng chưa nào?
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold text-plum-700/70 sm:text-sm">
                    Bấm <span className="text-candy-600">QUAY NGAY</span> để em chọn món cho anh. Em hứa là ngon đó 💗
                  </p>
                  <div className="mt-5 flex gap-3 text-3xl">
                    <span className="animate-floaty">🍲</span>
                    <span className="animate-floaty" style={{ animationDelay: '0.4s' }}>
                      🧋
                    </span>
                    <span className="animate-floaty" style={{ animationDelay: '0.8s' }}>
                      🍧
                    </span>
                    <span className="animate-floaty" style={{ animationDelay: '1.2s' }}>
                      🍢
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <SavedPanel
              favorites={favorites}
              history={history}
              onPick={(food) => {
                setResult(food)
                setAccepted(false)
              }}
              onRemoveFavorite={toggleFavorite}
              onClearHistory={() => setHistoryIds([])}
            />
          </section>
        </div>

        {/* -------------------------------- FOOTER ------------------------------ */}
        <footer className="mt-14 text-center">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-candy-300 to-transparent" />
          <p className="mt-4 font-display text-base font-bold text-plum-800">
            Làm riêng cho người anh thương 💗
          </p>
          <p className="mt-1 text-xs font-semibold text-plum-700/55">
            Chúc hai đứa ăn ngon miệng — hết giận nhau thì quay thêm một vòng nhé 😘
          </p>
        </footer>
      </div>
    </div>
  )
}
