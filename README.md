# Aplikasi Catatan Pribadi

Aplikasi Catatan sederhana berbasis **React.js** yang memungkinkan pengguna untuk menambah, menghapus, mengarsipkan, dan mencari catatan. Aplikasi ini dirancang dengan tampilan modern, responsif, dan mudah digunakan.

---

## 📝 Fitur Utama

1. **Daftar Catatan**

   * Menampilkan semua catatan yang belum diarsipkan.
   * Tampilan kartu catatan dengan judul, tanggal dibuat, dan isi catatan.

2. **Tambah Catatan**

   * Menambahkan catatan baru dengan judul dan isi.
   * Judul terbatas 50 karakter, otomatis memberi judul "Untitled" jika kosong.

3. **Hapus Catatan**

   * Menghapus catatan dengan konfirmasi menggunakan **SweetAlert2**.

4. **Arsip Catatan**

   * Mengarsipkan atau memindahkan catatan dari daftar utama ke halaman arsip.

5. **Pencarian Catatan**

   * Mencari catatan berdasarkan judul menggunakan search bar.

6. **Navigasi Halaman**

   * Navigasi menggunakan **React Router**: Home, Add, Archive, Detail, dan NotFound.

7. **Detail Catatan**

   * Menampilkan halaman detail catatan lengkap dengan isi catatan.

8. **Responsive Layout & Styling Modern**

   * Grid responsif untuk daftar catatan.
   * Dark mode, hover effect, dan tombol yang intuitif.

---

## 💻 Teknologi yang Digunakan

* React.js (Functional & Class Component)
* React Router DOM
* React Icons
* SweetAlert2
* CSS custom (tanpa framework)

---

## 📁 Struktur Project

```
src/
├─ components/
│  ├─ NoteApp.jsx
│  ├─ Navigation.jsx
│  ├─ NoteCard.jsx
│  ├─ NoteList.jsx
│  ├─ NoteInput.jsx
│  ├─ DeleteButton.jsx
│  ├─ ArchiveButton.jsx
│  └─ SearchBar.jsx
├─ pages/
│  ├─ HomePage.jsx
│  ├─ AddPage.jsx
│  ├─ ArchivePage.jsx
│  ├─ DetailPage.jsx
│  └─ NotFoundPage.jsx
├─ utils/
│  └─ local-data.js
├─ styles/
│  └─ style.css
└─ index.js
```

---

## ⚙️ Cara Install dan Jalankan

1. **Clone repository**

```bash
git clone <repository-url>
cd <folder-project>
```

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan aplikasi**

```bash
npm start
```

---

## 💡 Saran Pengembangan ke Depan

* Tambahkan **Edit Catatan** agar pengguna dapat mengubah judul dan isi.
* Tambahkan **kategori/tag** untuk mempermudah filter catatan.
* Tambahkan **pin/sticky note** untuk catatan penting agar selalu muncul di atas.
* Tambahkan **light/dark mode toggle**.
* Tambahkan penyimpanan permanen dengan **localStorage** atau **backend database**.

---

## 🔗 Catatan

* Semua data catatan saat ini disimpan di **memory / local variable**, jadi akan hilang saat reload browser (opsional: bisa diubah ke localStorage).
* Fitur delete menggunakan konfirmasi agar tidak sengaja terhapus.

---

## 👤 Pembuat

**Nama:** Dwiky Juniardi
**Instansi:** Politeknik Negeri Pontianak
