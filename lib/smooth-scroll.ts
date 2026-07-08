// Custom smooth scroll with a controlled (slow) duration and fixed-header offset.
export function smoothScrollTo(target: string, offset = 80, duration = 1100) {
  if (typeof window === 'undefined') return
  if (!target || target === '#' || !target.startsWith('#')) return

  const el = document.querySelector(target)
  if (!el) return

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  const startY = window.scrollY
  const targetY =
    el.getBoundingClientRect().top + window.scrollY - offset
  const distance = targetY - startY

  if (prefersReduced || Math.abs(distance) < 4) {
    window.scrollTo(0, targetY)
    return
  }

  // easeInOutCubic for a smooth, gentle glide
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  let startTime: number | null = null

  const step = (now: number) => {
    if (startTime === null) startTime = now
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
