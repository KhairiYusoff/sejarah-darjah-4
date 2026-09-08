# Pelan Commit

## Strategi commit
Semua commit perlu kecil, jelas dan mudah difahami. Tujuan utama ialah menunjukkan progres pembelajaran dan pembangunan secara berperingkat.

## Status semasa

| Status | Item |
| --- | --- |
| [x] | Dokumentasi projek siap |
| [x] | Kandungan Unit 1 hingga Unit 11 siap |
| [x] | Bank soalan siap: 55 soalan, 5 soalan setiap unit |
| [x] | Taburan jawapan seimbang: A=14, B=14, C=14, D=13 |
| [x] | Panduan handoff tersedia di `docs/00-handoff.md` |
| [ ] | Status kandungan ditukar daripada `needs-review` kepada `verified` |
| [~] | Langkah coding semasa: bina TypeScript data model |

## Urutan commit yang telah dicadangkan

1. `chore: initialize Expo project`
2. `docs: add project vision and architecture`
3. `feat: add quiz home screen`
4. `feat: add question data model`
5. `feat: render question and answer options`
6. `feat: add answer selection and feedback`
7. `feat: calculate score and progress`
8. `feat: add result screen`
9. `refactor: improve quiz layout and styling`
10. `docs: add roadmap and commit plan`

## Urutan commit seterusnya

| Status | No. | Commit |
| --- | ---: | --- |
| [ ] | 11 | `feat: add question data model` |
| [ ] | 12 | `feat: add complete question dataset` |
| [ ] | 13 | `feat: extract quiz screen` |
| [ ] | 14 | `feat: add reusable quiz components` |
| [ ] | 15 | `feat: add quiz state hook` |
| [ ] | 16 | `test: validate quiz flow` |

Setiap commit selepas nombor 10 perlu dibuat hanya selepas validasi berkaitan berjaya. Rujuk `docs/00-handoff.md` untuk tugas setiap commit.

## Peraturan commit
- Gunakan mesej ringkas namun jelas
- Fokus pada apa yang berubah
- Elakkan mesej umum seperti "update files"
- Pastikan commit tidak terlalu besar
- Setiap commit harus membawa nilai pembelajaran yang jelas
