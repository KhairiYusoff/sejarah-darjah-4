# Seni Bina Aplikasi

## Gambar rajah ringkas

```text
App
└── QuizScreen
    ├── Header
    ├── ProgressSummary
    ├── QuestionCard
    │   └── OptionList
    ├── FeedbackPanel
    └── ResultScreen
```

## Prinsip rekabentuk
- Aplikasi perlu ringkas dan mudah dibaca
- Setiap komponen mempunyai fungsi tersendiri
- Data soalan dipisahkan dari UI
- Logik kuiz dikawal secara jelas dan mudah diurus
- Gaya visual perlu mesra kanak-kanak dan tidak terlalu kompleks

## Struktur projek yang disarankan

```text
src/
  app/
  components/
    Header.tsx
    QuestionCard.tsx
    OptionButton.tsx
    ResultCard.tsx
  data/
    questions.ts
  hooks/
    useQuiz.ts
  screens/
    QuizScreen.tsx
  theme/
    colors.ts
    spacing.ts
  types/
    quiz.ts
```

## Aliran aplikasi
1. Pengguna melihat halaman utama kuiz
2. Soalan dipaparkan satu per satu
3. Pengguna memilih jawapan
4. Sistem memaparkan feedback dan penerangan
5. Markah dikira secara automatik
6. Pengguna sampai ke skrin keputusan akhir
7. Pengguna boleh ulang semula kuiz

## Keputusan seni bina
- Mudah untuk belajar dan faham
- Senang untuk menambah soalan baru
- Mudah untuk ubah suai reka bentuk
- Menjaga pemisahan data dan paparan UI
