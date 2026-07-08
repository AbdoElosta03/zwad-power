'use client'

import { useMemo } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const stations = [
  { lat: 32.8867, lng: 13.1816, label: 'طرابلس المركز' },
  { lat: 32.8745, lng: 13.2088, label: 'حي الأندلس' },
  { lat: 32.8812, lng: 13.1874, label: 'شارع الجمهورية' },
  { lat: 32.8589, lng: 13.2286, label: 'سوق الثلاثاء' },
  { lat: 32.9084, lng: 13.1789, label: 'باب البحر' },
] as const

const TRIPOLI_CENTER: [number, number] = [32.8872, 13.1913]

function createPinIcon(label: string) {
  return L.divIcon({
    className: 'zwad-map-pin',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="display:grid;width:36px;height:36px;place-items:center;border-radius:9999px;background:#10b981;color:#fff;box-shadow:0 0 0 3px rgba(180,255,140,0.35),0 0 24px rgba(16,185,129,0.7);">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <span style="margin-top:4px;white-space:nowrap;border-radius:6px;background:rgba(4,53,42,0.92);padding:2px 8px;font-size:10px;font-weight:700;color:#b4ff8c;border:1px solid rgba(180,255,140,0.25);">${label}</span>
      </div>
    `,
    iconSize: [96, 56],
    iconAnchor: [48, 36],
    popupAnchor: [0, -36],
  })
}

export function StationsMap() {
  const icons = useMemo(
    () =>
      Object.fromEntries(
        stations.map((station) => [station.label, createPinIcon(station.label)])
      ),
    []
  )

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-brand-deep shadow-xl shadow-brand/20">
      <MapContainer
        center={TRIPOLI_CENTER}
        zoom={13}
        scrollWheelZoom={false}
        className="zwad-stations-map h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {stations.map((station) => (
          <Marker
            key={station.label}
            position={[station.lat, station.lng]}
            icon={icons[station.label]}
          >
            <Popup>
              <span className="font-bold">{station.label}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="pointer-events-none absolute bottom-4 right-4 z-[1000] rounded-xl border border-white/10 bg-brand-deep/90 px-4 py-2 text-right shadow-lg backdrop-blur-sm">
        <p className="font-display text-lg font-black text-neon">+1000</p>
        <p className="text-[11px] font-medium text-white/70">محطة نشطة</p>
      </div>
    </div>
  )
}
