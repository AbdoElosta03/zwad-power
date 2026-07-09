'use client'

import dynamic from 'next/dynamic'
import type { ComponentProps } from 'react'

const StationsMapInner = dynamic(
  () => import('@/components/stations-map').then((mod) => mod.StationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[4/3] animate-pulse rounded-3xl border border-border bg-muted" />
    ),
  },
)

export function StationsMap(props: ComponentProps<typeof StationsMapInner>) {
  return <StationsMapInner {...props} />
}
