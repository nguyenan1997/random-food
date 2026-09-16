import { motion } from 'framer-motion'
import { CATEGORIES, AREAS } from '../data/foods'

export default function FilterBar({
  category,
  setCategory,
  area,
  setArea,
  search,
  setSearch,
  count,
  onReset,
}) {
  return (
    <div className="glass w-full rounded-[24px] p-3 shadow-soft sm:rounded-[28px] sm:p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm món, ví dụ: phở, bún chả..."
            className="w-full rounded-2xl border border-candy-200 bg-white/90 py-3 pl-11 pr-4 text-base font-semibold text-plum-800 placeholder:text-plum-700/40 focus:border-candy-400 focus:outline-none focus:ring-4 focus:ring-candy-200/60 sm:text-sm"
          />
        </div>

        <div className="flex gap-2 sm:gap-3">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="min-w-0 flex-1 rounded-2xl border border-candy-200 bg-white/90 px-3 py-3 text-base font-semibold text-plum-800 focus:border-candy-400 focus:outline-none focus:ring-4 focus:ring-candy-200/60 sm:w-44 sm:flex-none sm:text-sm"
          >
            <option value="all">📍 Tất cả khu vực</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                📍 {a}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={onReset}
            className="shrink-0 rounded-2xl border border-candy-200 bg-white/90 px-3.5 py-3 text-sm font-bold text-candy-600 transition hover:bg-candy-50 active:scale-95 sm:px-4"
          >
            ♻️ Reset
          </button>
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((c) => {
          const active = category === c.id
          return (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              whileTap={{ scale: 0.92 }}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                active
                  ? 'text-white'
                  : 'border border-candy-200 bg-white/80 text-plum-700 hover:bg-candy-50'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-candy-400 to-candy-600 shadow-candy"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                <span>{c.emoji}</span>
                {c.label}
              </span>
            </motion.button>
          )
        })}
      </div>

      <p className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-candy-500">
        {count} món khớp bộ lọc
      </p>
    </div>
  )
}
