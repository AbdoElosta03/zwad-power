'use client'

import dynamic from 'next/dynamic'

export const StationsMap = dynamic(
  () => import('@/components/stations-map').then((mod) => mod.StationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[4/3] animate-pulse rounded-3xl border border-border bg-muted" />
    ),
  }
)
