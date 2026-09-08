# Handoff Projek untuk AI Seterusnya

## Cara menggunakan dokumen ini

Baca dokumen ini dahulu sebelum membuat perubahan. Selepas itu, baca dokumen lain mengikut keperluan.

`docs/01-vision.md`, `docs/02-architecture.md`, `docs/03-roadmap.md`, `docs/04-rules.md` dan `docs/05-commit-plan.md` ialah dokumen sokongan.

## Sumber kebenaran dokumen

| Keperluan | Dokumen utama |
| --- | --- |
| Status semasa dan langkah kerja | `docs/00-handoff.md` |
| Struktur aplikasi | `docs/02-architecture.md` |
| Kandungan dan unit | `docs/03-roadmap.md` dan `docs/buku-teks/` |
| Peraturan pembangunan | `docs/04-rules.md` |
| Commit dan urutan kerja | `docs/05-commit-plan.md` |

## Matlamat projek

Ini ialah aplikasi kuiz React Native Expo untuk Sejarah Tahun 4 Sekolah Kebangsaan, KSSR Semakan 2017. Pengguna utama ialah murid Tahun 4. Pemilik projek sedang belajar React Native dan TypeScript dari asas, jadi setiap perubahan mesti kecil, mudah diterangkan dan dibuat secara berperingkat.

## Keputusan penting yang mesti dikekalkan

- Kandungan aplikasi menggunakan 11 unit Sejarah Tahun 4.
- Sasaran bank soalan ialah 55 soalan: 5 soalan bagi setiap unit.
- Setiap soalan mempunyai pilihan A, B, C dan D.
- Data soalan mesti dipisahkan daripada UI.
- Status soalan sekarang ialah `needs-review`, bukan `verified`.
- Jangan tukar kepada `verified` tanpa semakan terhadap buku teks atau DSKP rasmi.
- Jangan buang atau tulis semula perubahan pengguna yang sedia ada.
- Jangan terus membuat refactor besar. Terangkan konsep sebelum setiap langkah penting.

## Status semasa

### Checklist status

| Status | Item |
| --- | --- |
| [x] | Expo + React Native + TypeScript project berjalan |
| [x] | README projek tersedia dalam Bahasa Melayu |
| [x] | Dokumentasi visi, seni bina, roadmap, rules dan commit plan tersedia |
| [x] | Nota kandungan Unit 1 hingga Unit 11 tersedia di `docs/buku-teks/` |
| [x] | Folder bank soalan tersedia di `docs/soalan/` |
| [x] | 55 Q&A lengkap tersedia: 5 soalan untuk setiap unit |
| [x] | Setiap soalan mempunyai ID, subtopik, pilihan A-D, jawapan, penerangan dan sumber |
| [x] | Kedudukan jawapan diseimbangkan: A=14, B=14, C=14, D=13 |
| [x] | Semakan automatik terakhir: 55 soalan, 0 answer mismatch |
| [ ] | Semakan kandungan terhadap halaman buku teks rasmi dan DSKP |
| [ ] | Penukaran status soalan daripada `needs-review` kepada `verified` |
| [ ] | TypeScript data model dalam `src/types/quiz.ts` |
| [ ] | Data aplikasi dalam `src/data/questions.ts` |
| [ ] | Modularisasi `App.tsx` kepada screen, components dan hook |
| [ ] | Ujian TypeScript dan ujian aplikasi selepas modularisasi |

## Langkah seterusnya yang wajib

### Langkah 1: Bina type model `[ ]`

Cipta:

```text
src/types/quiz.ts
```

Mulakan dengan type yang mudah:

```ts
export type Question = {
  id: string;
  unit: number;
  subtopic: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};
```

Jangan ubah UI dalam langkah ini. Jalankan TypeScript selepas fail dicipta.

### Langkah 2: Pindahkan data kuiz `[ ]`

Cipta:

```text
src/data/questions.ts
```

Pindahkan 55 soalan daripada `docs/soalan/` ke dalam array `Question[]`. Jangan ubah fakta atau jawapan semasa proses pemindahan. Gunakan `answerIndex` berdasarkan kedudukan A=0, B=1, C=2, D=3.

### Langkah 3: Modularisasi screen `[ ]`

Cipta `src/screens/QuizScreen.tsx`, kemudian pindahkan UI kuiz dari `App.tsx`. Pada tahap ini, kekalkan behavior sedia ada: soalan satu per satu, pilihan jawapan, feedback, markah dan restart.

### Langkah 4: Pecahkan komponen `[ ]`

Pecahkan secara kecil:

- `src/components/Header.tsx`
- `src/components/QuestionCard.tsx`
- `src/components/OptionButton.tsx`
- `src/components/ResultCard.tsx`

Gunakan `Pressable` untuk UI utama. Pelajari `TouchableOpacity` sebagai perbandingan interview, tetapi jangan gantikan `Pressable` tanpa sebab.

### Langkah 5: Pindahkan logik kuiz `[ ]`

Cipta `src/hooks/useQuiz.ts` untuk state dan behavior kuiz. Pastikan `App.tsx` akhirnya hanya merender `QuizScreen`.

## Commit plan selepas handoff

| Status | Commit | Tujuan |
| --- | --- | --- |
| [ ] | `feat: add question data model` | Tambah type `Question` |
| [ ] | `feat: add complete question dataset` | Pindahkan 55 soalan ke TypeScript |
| [ ] | `feat: extract quiz screen` | Pisahkan `QuizScreen` daripada `App.tsx` |
| [ ] | `feat: add reusable quiz components` | Pecahkan UI kepada komponen kecil |
| [ ] | `feat: add quiz state hook` | Pindahkan state dan logik ke `useQuiz` |
| [ ] | `test: validate quiz flow` | Sahkan aliran kuiz dan TypeScript |

Jalankan validasi sebelum setiap commit:

```bash
npx tsc --noEmit
npm run start
```

Untuk perubahan data, jalankan juga semakan struktur 55 soalan yang sedia ada di terminal. Jangan claim berjaya tanpa output validasi baharu.

## Nota tentang sumber

Sumber pendidikan KPM menyediakan pautan buku teks digital dan DSKP. PDF rasmi telah dapat dimuat turun, tetapi kandungannya tidak mempunyai lapisan teks yang boleh diekstrak dalam persekitaran semasa. Oleh itu, semua soalan kekal `needs-review` sehingga semakan manual/OCR terhadap halaman rasmi selesai.

Pandai digunakan sebagai sumber sokongan, bukan bukti tunggal untuk status `verified`.

## Gaya komunikasi dengan pemilik projek

- Gunakan Bahasa Melayu yang mudah, dengan istilah teknikal English apabila membantu.
- Pemilik projek ialah beginner dalam React Native dan TypeScript.
- Terangkan apa, mengapa dan cara sebelum edit besar.
- Jangan lompat terus ke architecture kompleks.
- Sentiasa sebut commit message yang akan digunakan.
