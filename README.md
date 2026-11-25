# 🚀 Starter Project — ASAS Praktek Frontend Web Development

**Pondok Tahfizh Plus IT Abu Dzar — Kelas XI**  
**Teknologi:** React 19 + TypeScript + Vite + Tailwind CSS + React Hook Form + Zod

Repository ini adalah starter template resmi untuk pelaksanaan **Asesmen Akhir Semester (ASAS) Praktek**. Semua dependensi utama sudah dikonfigurasi, sehingga santri dapat langsung fokus menyusun form dan validasi skema Zod.

---

## 📋 Langkah 1: Fork Repository ke Akun GitHub Santri

Sebelum melakukan clone ke komputer masing-masing:

1. Buka repository induk ini di browser:  
   👉 **`https://github.com/Imamsb6409/starter-react-typescript`**
2. Klik tombol **Fork** (di pojok kanan atas halaman GitHub).
3. Pilih akun GitHub Anda sendiri, lalu klik **Create fork**.
4. Sekarang Anda memiliki salinan repository di akun Anda sendiri:  
   `https://github.com/<USERNAME-ANDA>/starter-react-typescript`

---

## 💻 Langkah 2: Clone ke Komputer Lokal (Teknik Spasi Titik)

Teknik `git clone <url> .` digunakan agar file proyek langsung masuk ke dalam folder yang sedang Anda buka, **tanpa membuat subfolder baru**.

1. Buka folder kerja ujian Anda di File Explorer (misal: `D:\Praktek-XI\asas-nama-santri`).
2. Klik kanan di dalam folder tersebut lalu pilih **Open in Terminal** (atau buka melalui VS Code).
3. Pastikan terminal berada di dalam folder yang kosong tersebut.
4. Jalankan perintah clone dengan menyertakan **spasi dan tanda titik (` .`)** di bagian akhir:

```bash
git clone https://github.com/<USERNAME-ANDA>/starter-react-typescript.git .
```

> ⚠️ **PENTING:** Pastikan URL yang di-clone adalah URL repo **hasil Fork Anda sendiri**, dan jangan lupa tanda titik di ujungnya!

---

## 📦 Langkah 3: Install Dependensi & Jalankan Server

Setelah proses clone selesai, jalankan perintah berikut di terminal:

```bash
# 1. Install semua paket dependensi yang dibutuhkan
npm install

# 2. Jalankan development server lokal
npm run dev
```

Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`) di browser Anda. Jika halaman welcome ASAS muncul, proyek siap dikerjakan.

---

## 🛠️ Langkah 4: Panduan Pengerjaan Tugas

1. **Kebebasan Struktur File:**  
   Santri dibebaskan membuat folder dan file baru di dalam `src/` (misalnya membuat folder `components/`, `schemas/`, atau `types/` sesuai kenyamanan dan kerapian arsitektur kode).
2. **Paket yang Sudah Tersedia:**
   - `react` & `react-dom`
   - `react-hook-form`
   - `zod`
   - `@hookform/resolvers/zod`
   - `tailwindcss` (Tailwind CSS v4)
3. **Komponen Utama:**
   - Hubungkan atau render komponen form yang Anda buat ke dalam `src/App.tsx`.
   - Pastikan form memiliki input teks/number, radio input (pilihan single-select), checkbox, dan tombol submit.
   - Terapkan validasi skema Zod dan tampilkan pesan error jika data tidak valid.
   - Tampilkan ringkasan data hasil submit di layar setelah form berhasil dikirim.

---

## 📤 Langkah 5: Simpan & Push Hasil Tugas ke GitHub

Setelah selesai mengerjakan dan memastikan tidak ada error:

1. Simpan semua perubahan:
```bash
git add .
```

2. Buat commit dengan format nama Anda:
```bash
git commit -m "Selesai pengerjaan ASAS Praktek - <Nama Santri>"
```

3. Push hasil pekerjaan ke repository forked Anda di GitHub:
```bash
git push origin main
```

4. Buka kembali halaman repository GitHub Anda di browser untuk memastikan seluruh kode dan commit terbaru telah ter-upload.
5. Salin link repository GitHub Anda dan kirimkan ke form pengumpulan tugas yang disediakan oleh Ustadz/Penguji.

---

*Selamat mengerjakan, utamakan kejujuran, kerapian kode, dan ketelitian sintaks!* 🌟
