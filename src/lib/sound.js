let ctx = null

const getCtx = () => {
  if (typeof window === 'undefined') return null
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  if (!ctx) ctx = new AC()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

const tone = (freq, start, duration, type = 'sine', gainValue = 0.06) => {
  const audio = getCtx()
  if (!audio) return
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, audio.currentTime + start)
  gain.gain.setValueAtTime(0, audio.currentTime + start)
  gain.gain.linearRampToValueAtTime(gainValue, audio.currentTime + start + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + start + duration)
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(audio.currentTime + start)
  osc.stop(audio.currentTime + start + duration + 0.02)
}

export const playTick = () => tone(1180 + Math.random() * 200, 0, 0.05, 'square', 0.025)

export const playSpinStart = () => {
  ;[392, 523, 659].forEach((f, i) => tone(f, i * 0.05, 0.12, 'triangle', 0.05))
}

export const playWin = () => {
  const notes = [659.25, 783.99, 987.77, 1318.51]
  notes.forEach((f, i) => tone(f, i * 0.09, 0.35, 'triangle', 0.07))
  tone(523.25, 0.36, 0.5, 'sine', 0.05)
}
