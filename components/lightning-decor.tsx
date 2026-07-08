import { cn } from '@/lib/utils'

function Bolt({ className, delay }: { className?: string; delay?: string }) {
  return (
    <svg
      viewBox="0 0 40 80"
      className={cn('animate-bolt', className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        d="M24 2 6 44h12l-6 34 28-48H26L34 2z"
        fill="var(--neon)"
        opacity="0.9"
        style={{ filter: 'drop-shadow(0 0 14px var(--neon))' }}
      />
    </svg>
  )
}

export function LightningDecor({ className }: { className?: string }) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <Bolt className="absolute left-[6%] top-[12%] h-24 w-12 opacity-70" delay="0s" />
      <Bolt className="absolute left-[16%] top-[38%] h-16 w-8 opacity-50" delay="0.8s" />
      <Bolt className="absolute left-[3%] bottom-[14%] h-20 w-10 opacity-40" delay="1.6s" />
    </div>
  )
}
