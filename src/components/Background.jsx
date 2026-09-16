import { useMemo } from 'react'

const FLOATERS = ['🍜', '🥢', '💕', '🍧', '🧋', '🌸', '🍢', '🥖', '🍰', '🍜', '💗', '🥟', '🍡', '💖', '☕', '🔥']

export default function Background() {
  const floaters = useMemo(
    () =>
      FLOATERS.map((emoji, i) => ({
        emoji,
        left: (i * 6.5 + Math.random() * 4) % 96,
        size: 18 + Math.random() * 30,
        delay: Math.random() * 9,
        duration: 12 + Math.random() * 14,
        opacity: 0.35 + Math.random() * 0.45,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base pink wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_0%,#fff7fc_0%,#ffe3f1_38%,#ffd0e8_68%,#ffbde0_100%)]" />

      {/* Soft animated blobs */}
      <div className="absolute -left-32 top-[-10%] h-[46rem] w-[46rem] rounded-full bg-candy-300/45 blur-[120px] animate-floaty-slow" />
      <div className="absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-fuchsia-300/40 blur-[120px] animate-floaty" />
      <div className="absolute bottom-[-18%] left-1/3 h-[42rem] w-[42rem] rounded-full bg-rose-200/55 blur-[130px] animate-floaty-slow" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(#ff6bb5 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* Floating food & hearts */}
      {floaters.map((f, i) => (
        <span
          key={i}
          className="absolute select-none animate-floaty"
          style={{
            left: `${f.left}%`,
            top: `${(i * 17 + 6) % 92}%`,
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            filter: 'drop-shadow(0 6px 10px rgba(245,44,138,0.25))',
          }}
        >
          {f.emoji}
        </span>
      ))}

      {/* Bottom fade so content stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-candy-100/90 to-transparent" />
    </div>
  )
}
