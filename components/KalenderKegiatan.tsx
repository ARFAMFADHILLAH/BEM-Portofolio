'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { SectionHead } from './ui'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type Ormawa = { id: string; nama: string; slug: string; logo?: string | null }
type Kegiatan = {
  id: string
  ormawa_id: string
  judul: string
  jenis: 'proker' | 'non-proker'
  periode: string
  tanggal_mulai: string
  tanggal_selesai: string
  deskripsi: string
  lokasi: string
  status: 'rencana' | 'berlangsung' | 'selesai'
  ormawa?: Ormawa
}

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const toDateKey = (value: string) => (value ? value.slice(0, 10) : '')

export default function KalenderKegiatan() {
  const [ormawaList, setOrmawaList] = useState<Ormawa[]>([])
  const [kegiatanList, setKegiatanList] = useState<Kegiatan[]>([])
  const [selectedOrmawa, setSelectedOrmawa] = useState<string>('all')
  const [selectedJenis, setSelectedJenis] = useState<string>('all')
  const [selectedPeriode, setSelectedPeriode] = useState<string>('26/27')
  const [date, setDate] = useState<Value>(new Date())
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    const { data: ormawaData } = await supabase.from('ormawa').select('*').order('nama')
    if (ormawaData) setOrmawaList(ormawaData)
    const { data: kegiatanData } = await supabase
      .from('kegiatan_ormawa')
      .select('*, ormawa:ormawa_id(*)')
      .order('tanggal_mulai', { ascending: true })
    if (kegiatanData) setKegiatanList(kegiatanData as Kegiatan[])
    setLoading(false)
  }, [])

  useEffect(() => {
    queueMicrotask(() => { void fetchData() })
  }, [fetchData])

  const filteredKegiatan = kegiatanList.filter(item => {
    if (selectedOrmawa !== 'all' && item.ormawa_id !== selectedOrmawa) return false
    if (selectedJenis !== 'all' && item.jenis !== selectedJenis) return false
    if (selectedPeriode !== 'all' && item.periode !== selectedPeriode) return false
    return true
  })

  const selectedDate = date instanceof Date ? date : null
  const selectedDateStr = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
    : ''
  const selectedDateActivities = filteredKegiatan.filter(k => toDateKey(k.tanggal_mulai) === selectedDateStr)

  return (
    <section className="section" id="kalender">
      <SectionHead no="02" label="AGENDA ORMAWA 26/27" title="Kalender Kegiatan" />

      {/* Filters */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--muted)] font-semibold">Filter Agenda</span>
          <span className="h-px flex-1 bg-[var(--line)]"></span>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[190px] bg-[var(--blue)] rounded-[var(--radius)] p-4 shadow-sm">
            <label className="block mb-2.5 text-[10px] font-mono uppercase tracking-[0.14em] text-white/80 font-bold">
              Periode
            </label>
            <select
              value={selectedPeriode}
              onChange={(e) => setSelectedPeriode(e.target.value)}
              className="select-white w-full h-11 bg-[#1c3ed6] border border-white/25 text-white text-sm font-mono font-semibold px-4 rounded-[var(--radius)] cursor-pointer hover:bg-[#152fae] focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            >
              <option value="all">Semua Periode</option>
              <option value="26/27">Periode 26/27</option>
            </select>
          </div>

          <div className="flex-1 min-w-[230px] bg-[var(--blue)] rounded-[var(--radius)] p-4 shadow-sm">
            <label className="block mb-2.5 text-[10px] font-mono uppercase tracking-[0.14em] text-white/80 font-bold">
              Ormawa
            </label>
            <select
              value={selectedOrmawa}
              onChange={(e) => setSelectedOrmawa(e.target.value)}
              className="select-white w-full h-11 bg-[#1c3ed6] border border-white/25 text-white text-sm font-mono font-semibold px-4 rounded-[var(--radius)] cursor-pointer hover:bg-[#152fae] focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            >
              <option value="all">Semua Ormawa (10+)</option>
              {ormawaList.map(o => (
                <option key={o.id} value={o.id}>{o.nama}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[200px] bg-[var(--blue)] rounded-[var(--radius)] p-4 shadow-sm">
            <label className="block mb-2.5 text-[10px] font-mono uppercase tracking-[0.14em] text-white/80 font-bold">
              Jenis Kegiatan
            </label>
            <select
              value={selectedJenis}
              onChange={(e) => setSelectedJenis(e.target.value)}
              className="select-white w-full h-11 bg-[#1c3ed6] border border-white/25 text-white text-sm font-mono font-semibold px-4 rounded-[var(--radius)] cursor-pointer hover:bg-[#152fae] focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            >
              <option value="all">Proker & Non-Proker</option>
              <option value="proker">Proker</option>
              <option value="non-proker">Non-Proker</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 font-mono text-sm text-[var(--muted)] bg-[var(--paper-2)] border border-[var(--line)] rounded-[var(--radius)]">
          Memuat kalender kegiatan...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-[var(--paper-2)] border-2 border-[var(--line)] rounded-[var(--radius)] p-4 md:p-6">
            <div className="custom-calendar-wrapper">
              <Calendar
                onChange={setDate}
                value={date}
                locale="id-ID"
                formatShortWeekday={(_locale, d) => ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][d.getDay()]}
                prev2Label={null}
                next2Label={null}
                prevLabel="‹"
                nextLabel="›"
                  tileContent={({ date: tileDate, view }) => {
                  if (view === 'month') {
                    const dStr = `${tileDate.getFullYear()}-${String(tileDate.getMonth() + 1).padStart(2, '0')}-${String(tileDate.getDate()).padStart(2, '0')}`
                    const dayEvents = filteredKegiatan.filter(k => toDateKey(k.tanggal_mulai) === dStr)
                    if (dayEvents.length > 0) {
                      const logos = dayEvents
                        .map(k => k.ormawa?.logo)
                        .filter((logo, i, arr): logo is string => Boolean(logo) && arr.indexOf(logo) === i)
                        .slice(0, 3)
                      return (
                        <div className="flex justify-center flex-wrap gap-0.5 mt-1 px-0.5" title={`${dayEvents.length} kegiatan`}>
                          {logos.length > 0 ? (
                            logos.map((logo, i) => (
                              <Image
                                key={`${logo}-${i}`}
                                src={logo}
                                alt=""
                                width={14}
                                height={14}
                                unoptimized
                                className="w-3.5 h-3.5 rounded-full object-cover bg-white ring-1 ring-white shadow-sm"
                              />
                            ))
                          ) : (
                            <span className={`w-2 h-2 rounded-full ring-2 ring-white shadow-sm ${dayEvents.some(ev => ev.jenis === 'proker') ? 'bg-[var(--yellow)]' : 'bg-[var(--blue)]'}`} />
                          )}
                        </div>
                      )
                    }
                  }
                  return null
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-[var(--line)]">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-mono font-semibold text-amber-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow)]"></span>Proker
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold text-blue-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--blue)]"></span>Non-Proker
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-mono font-semibold text-amber-800">
                <span className="w-3 h-3 rounded-[3px] border-2 border-[var(--yellow)] bg-white"></span>Hari Ini
              </span>
            </div>
          </div>

          {/* Agenda Panel */}
          <div className="bg-[var(--paper-2)] border-2 border-[var(--line)] rounded-[var(--radius)] p-5 md:p-6 flex flex-col">
            <div className="pb-5 mb-5 border-b-2 border-[var(--line)]">
              <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--muted)] font-semibold mb-2">Agenda Tanggal</span>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[var(--ink)] leading-snug">
                {selectedDate
                  ? selectedDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
                  : 'Pilih tanggal'}
              </h3>
              <div className="w-12 h-1 bg-[var(--yellow)] mt-3 rounded-full"></div>
            </div>

            {selectedDateActivities.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-14 px-6 border border-dashed border-[var(--line-strong)] rounded-[var(--radius)] bg-[var(--paper)]">
                <div className="w-12 h-12 rounded-full bg-[var(--line)]/50 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-mono text-[var(--ink-soft)] text-center leading-relaxed">Tidak ada kegiatan<br/>pada tanggal ini</p>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto max-h-[480px] pr-1">
                {selectedDateActivities.map(act => (
                  <div key={act.id} className={`p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[var(--radius)] border-l-4 ${act.jenis === 'proker' ? 'border-l-[var(--yellow)]' : 'border-l-[var(--blue)]'}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[var(--line)]/50 text-[var(--ink)] rounded uppercase">
                        {act.ormawa?.nama || 'Ormawa'}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold ${act.jenis === 'proker' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                        {act.jenis}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-[var(--ink)] mb-1">{act.judul}</h4>
                    {act.deskripsi && <p className="text-xs text-[var(--ink-soft)] mb-3 line-clamp-2">{act.deskripsi}</p>}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--line)] text-[11px] font-mono text-[var(--muted)]">
                      <span>📍 {act.lokasi || 'Kampus'}</span>
                      <span className={`px-2 py-0.5 rounded uppercase text-[10px] font-semibold ${
                        act.status === 'selesai' ? 'bg-emerald-100 text-emerald-700' :
                        act.status === 'berlangsung' ? 'bg-amber-100 text-amber-700' : 'bg-neutral-100 text-neutral-600'
                      }`}>{act.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .select-white {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 12px;
          padding-right: 38px;
        }
        .select-white option {
          background: var(--paper);
          color: var(--ink);
        }
        .custom-calendar-wrapper .react-calendar {
          width: 100%;
          background: transparent;
          border: none;
          font-family: var(--font-body);
          line-height: 1.4;
        }
        .custom-calendar-wrapper .react-calendar__navigation {
          display: flex;
          align-items: center;
          margin-bottom: 1.25rem;
          gap: 0.5rem;
        }
        .custom-calendar-wrapper .react-calendar__navigation button {
          min-width: 40px;
          height: 40px;
          background: var(--paper);
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .custom-calendar-wrapper .react-calendar__navigation button:enabled:hover {
          background: var(--ink);
          color: var(--paper);
          border-color: var(--ink);
        }
        .custom-calendar-wrapper .react-calendar__navigation__label {
          flex-grow: 1 !important;
          font-family: var(--font-display) !important;
          font-size: 1.2rem !important;
          font-weight: 600 !important;
          color: var(--ink) !important;
          background: transparent !important;
          border: none !important;
        }
        .custom-calendar-wrapper .react-calendar__month-view__weekdays {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink-soft);
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1.5px solid var(--line);
        }
        .custom-calendar-wrapper .react-calendar__month-view__weekdays__weekday {
          padding: 0.4rem 0;
        }
        .custom-calendar-wrapper .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }
        .custom-calendar-wrapper .react-calendar__month-view__days {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }
        .custom-calendar-wrapper .react-calendar__tile {
          aspect-ratio: 1 / 1;
          padding: 8px 4px 4px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: all 0.12s ease;
        }
        .custom-calendar-wrapper .react-calendar__tile:enabled:hover {
          background: #ece7dc;
          border-color: var(--line-strong);
        }
        .custom-calendar-wrapper .react-calendar__tile--now {
          background: rgba(255, 197, 40, 0.15) !important;
          border: 2px solid var(--yellow) !important;
          font-weight: 700;
        }
        .custom-calendar-wrapper .react-calendar__tile--active {
          background: var(--blue) !important;
          color: #fff !important;
          border-color: var(--blue) !important;
          font-weight: 700;
        }
        .custom-calendar-wrapper .react-calendar__tile--active:enabled:hover {
          background: #1e3db8 !important;
        }
        .custom-calendar-wrapper .react-calendar__month-view__days__day--neighboringMonth {
          color: var(--muted);
          opacity: 0.3;
          background: transparent;
          border-color: transparent;
        }
        .custom-calendar-wrapper .react-calendar__month-view__days__day--weekend:not(.react-calendar__tile--active):not(.react-calendar__month-view__days__day--neighboringMonth) {
          color: #92400e;
        }
        @media (max-width: 640px) {
          .custom-calendar-wrapper .react-calendar__navigation {
            gap: 0.25rem;
            margin-bottom: 0.75rem;
          }
          .custom-calendar-wrapper .react-calendar__navigation button {
            min-width: 34px;
            height: 34px;
            font-size: 1rem;
          }
          .custom-calendar-wrapper .react-calendar__navigation__label {
            font-size: 1rem !important;
          }
          .custom-calendar-wrapper .react-calendar__month-view__weekdays {
            font-size: 0.62rem;
            letter-spacing: 0.02em;
            margin-bottom: 0.35rem;
            padding-bottom: 0.35rem;
          }
          .custom-calendar-wrapper .react-calendar__month-view__weekdays__weekday {
            padding: 0.25rem 0;
          }
          .custom-calendar-wrapper .react-calendar__month-view__days {
            gap: 3px;
          }
          .custom-calendar-wrapper .react-calendar__tile {
            aspect-ratio: auto;
            min-height: 40px;
            font-size: 0.7rem;
            padding: 5px 1px 2px;
            border-radius: 2px;
          }
        }
      `}</style>
    </section>
  )
}
