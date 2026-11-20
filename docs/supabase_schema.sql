-- Tabel Ormawa (Bisa nambah 10+ ormawa, misal BEM, DPM, HIMA, dll)
create table if not exists ormawa (
  id uuid default gen_random_uuid() primary key,
  nama text not null,
  slug text not null unique,
  logo text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Kolom logo untuk database yang sudah dibuat sebelumnya
alter table ormawa add column if not exists logo text;

-- Supabase Storage: bucket publik "ormawa-logos" untuk logo ormawa (diunggah lewat panel admin).

-- Tabel Kalender Kegiatan ORMAWA (Periode 26/27, Proker & Non-Proker)
create table if not exists kegiatan_ormawa (
  id uuid default gen_random_uuid() primary key,
  ormawa_id uuid references ormawa(id) on delete cascade not null,
  judul text not null,
  jenis text check (jenis in ('proker', 'non-proker')) not null,
  periode text default '26/27' not null,
  tanggal_mulai date not null,
  tanggal_selesai date,
  deskripsi text,
  lokasi text,
  status text check (status in ('rencana', 'berlangsung', 'selesai')) default 'rencana' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Public Read, Admin Write)
alter table ormawa enable row level security;
alter table kegiatan_ormawa enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) = 'admin.bemunara@gmail.com';
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Public read ormawa" on ormawa;
create policy "Public read ormawa" on ormawa for select using (true);
drop policy if exists "Auth write ormawa" on ormawa;
drop policy if exists "Admin write ormawa" on ormawa;
create policy "Admin write ormawa" on ormawa for all to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public read kegiatan" on kegiatan_ormawa;
create policy "Public read kegiatan" on kegiatan_ormawa for select using (true);
drop policy if exists "Auth write kegiatan" on kegiatan_ormawa;
drop policy if exists "Admin write kegiatan" on kegiatan_ormawa;
create policy "Admin write kegiatan" on kegiatan_ormawa for all to authenticated
using (public.is_admin())
with check (public.is_admin());
