import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function EmptyState({ text }) {
  return <p className="rounded-2xl bg-white/60 px-4 py-6 text-center text-sm font-semibold text-plum-700/50">{text}</p>
}

export default function SavedPanel({ favorites, history, onPick, onRemoveFavorite, onClearHistory }) {
  const [tab, setTab] = useState('favorites')

  return (
    <div className="glass w-full rounded-[24px] p-3 shadow-soft sm:rounded-[28px] sm:p-4">
      <div className="flex items-center gap-2">
        <div className="flex min-w-0 flex-1 gap-2">
          {[
            { id: 'favorites', label: `💖 Yêu thích (${favorites.length})` },
            { id: 'history', label: `🕒 Vừa quay (${history.length})` },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`min-w-0 flex-1 truncate rounded-2xl px-2 py-2 text-[13px] font-bold transition sm:px-3 sm:text-sm ${
                tab === t.id
                  ? 'bg-gradient-to-r from-candy-400 to-candy-600 text-white shadow-candy'
                  : 'border border-candy-200 bg-white/70 text-plum-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {tab === 'history' && history.length > 0 && (
          <button
            type="button"
            onClick={onClearHistory}
            className="shrink-0 rounded-2xl border border-candy-200 bg-white/70 px-3 py-2 text-xs font-bold text-candy-600"
          >
            Xoá
          </button>
        )}
      </div>

      <div className="mt-3 max-h-64 space-y-2 overflow-y-auto pr-1 sm:max-h-72">
        <AnimatePresence mode="popLayout">
          {tab === 'favorites' &&
            (favorites.length === 0 ? (
              <EmptyState text="Chưa có món nào được lưu. Bấm 💖 trên thẻ kết quả nhé!" />
            ) : (
              favorites.map((f) => (
                <motion.div
                  key={f.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 p-3"
                >
                  <span className="text-2xl">{f.emoji}</span>
                  <button
                    type="button"
                    onClick={() => onPick(f)}
                    className="flex-1 text-left"
                  >
                    <p className="font-display text-base font-bold leading-tight text-plum-800">{f.name}</p>
                    <p className="text-xs font-semibold text-candy-600">{f.price}</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveFavorite(f)}
                    aria-label={`Bỏ lưu ${f.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full bg-candy-100 text-candy-600 transition hover:bg-candy-200"
                  >
                    ✕
                  </button>
                </motion.div>
              ))
            ))}

          {tab === 'history' &&
            (history.length === 0 ? (
              <EmptyState text="Chưa quay lần nào. Bấm QUAY NGAY để bắt đầu!" />
            ) : (
              history.map((f, i) => (
                <motion.button
                  key={`${f.id}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => onPick(f)}
                  className="flex w-full items-center gap-3 rounded-2xl bg-white/80 p-3 text-left transition hover:bg-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-candy-100 text-xs font-extrabold text-candy-600">
                    {history.length - i}
                  </span>
                  <span className="text-2xl">{f.emoji}</span>
                  <span className="flex-1">
                    <span className="block font-display text-base font-bold leading-tight text-plum-800">
                      {f.name}
                    </span>
                    <span className="block text-xs font-semibold text-plum-700/60">
                      {f.areas?.slice(0, 2).join(' • ')}
                    </span>
                  </span>
                </motion.button>
              ))
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
