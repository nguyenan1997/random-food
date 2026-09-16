import { useMemo } from 'react'

const FLOATERS = ['🍜', '🥢', '💕', '🍧', '🧋', '🌸', '🍢', '🥖', '🍰', '💗']

export default function Background() {
  const floaters = useMemo(
    () =>
      FLOATERS.map((emoji, i) => ({
        emoji,
        left: (i * 10 + Math.random() * 4) % 94,
        size: 20 + Math.random() * 26,
        delay: Math.random() * 9,
        duration: 12 + Math.random() * 12,
        opacity: 0.4 + Math.random() * 0.4,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Nền hồng: gradient tĩnh — thay cho 3 blob blur 120px trước đây,
          vì blur diện tích lớn chạy mỗi khung hình sẽ làm sập GPU. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 42% at 10% 0%, rgba(255,168,212,0.80) 0%, rgba(255,168,212,0) 70%),' +
            'radial-gradient(52% 38% at 94% 24%, rgba(243,171,252,0.62) 0%, rgba(243,171,252,0) 72%),' +
            'radial-gradient(72% 52% at 44% 108%, rgba(255,205,225,0.90) 0%, rgba(255,205,225,0) 72%),' +
            'linear-gradient(180deg, #fff8fc 0%, #ffe7f3 44%, #ffd8eb 100%)',
        }}
      />

      {/* Lưới chấm mờ */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(#ff6bb5 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Emoji bay — chỉ animate transform, không dùng filter drop-shadow */}
      {floaters.map((f, i) => (
        <span
          key={i}
          className="absolute select-none animate-floaty"
          style={{
            left: `${f.left}%`,
            top: `${(i * 21 + 6) % 90}%`,
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        >
          {f.emoji}
        </span>
      ))}

      {/* Che dần xuống đáy cho chữ dễ đọc */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-candy-100/90 to-transparent" />
    </div>
  )
}
