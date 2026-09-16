import { useEffect, useRef } from 'react'

const COLORS = ['#ff4fa3', '#ff7cbf', '#ffa8d4', '#f52c8a', '#ffd1e8', '#ffb0d9', '#ffffff', '#ff8ec7']

const drawHeart = (ctx, x, y, size) => {
  const s = size / 16
  ctx.beginPath()
  ctx.moveTo(x, y + 4 * s)
  ctx.bezierCurveTo(x, y, x - 8 * s, y, x - 8 * s, y + 6 * s)
  ctx.bezierCurveTo(x - 8 * s, y + 12 * s, x, y + 16 * s, x, y + 21 * s)
  ctx.bezierCurveTo(x, y + 16 * s, x + 8 * s, y + 12 * s, x + 8 * s, y + 6 * s)
  ctx.bezierCurveTo(x + 8 * s, y, x, y, x, y + 4 * s)
  ctx.closePath()
  ctx.fill()
}

export default function Confetti({ trigger = 0 }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const raf = useRef(null)
  const running = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    // Giới hạn DPR ở 1.5: canvas full-screen ở DPR 3 ngốn rất nhiều VRAM
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      ctx.clearRect(0, 0, W, H)

      particles.current = particles.current.filter((p) => p.life > 0 && p.y < H + 80)

      particles.current.forEach((p) => {
        p.vy += p.g
        p.vx *= 0.995
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        p.life -= 0.006

        ctx.save()
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life))
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        if (p.shape === 'heart') {
          drawHeart(ctx, 0, -p.size / 2, p.size * 2.2)
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        }
        ctx.restore()
      })

      if (particles.current.length > 0) {
        raf.current = requestAnimationFrame(tick)
      } else {
        running.current = false
        ctx.clearRect(0, 0, W, H)
      }
    }

    if (trigger > 0) {
      const W = window.innerWidth
      const H = window.innerHeight
      const originX = W / 2
      const originY = Math.min(H * 0.45, 420)

      for (let i = 0; i < 70; i++) {
        const spread = (Math.random() - 0.5) * 2
        particles.current.push({
          x: originX + spread * 60,
          y: originY + (Math.random() - 0.5) * 40,
          vx: spread * (4 + Math.random() * 8),
          vy: -Math.random() * 14 - 3,
          g: 0.26 + Math.random() * 0.18,
          size: 6 + Math.random() * 12,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.34,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: Math.random() > 0.4 ? 'heart' : 'rect',
          life: 1,
        })
      }

      if (!running.current) {
        running.current = true
        raf.current = requestAnimationFrame(tick)
      }
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (raf.current) cancelAnimationFrame(raf.current)
      running.current = false
    }
  }, [trigger])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50 h-full w-full" />
}
