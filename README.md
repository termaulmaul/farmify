# Farmify - Dashboard Pemantauan Soil Sensor untuk Sawah

Farmify adalah sebuah aplikasi web untuk memantau kondisi tanah di sawah dengan menggunakan sensor tanah (soil sensor). Aplikasi ini menggunakan ESP32 untuk membaca nilai dari sensor tanah dan menampilkan status tanah di dashboard yang dapat diakses melalui web. Dashboard ini berguna untuk memonitor status kelembaban tanah secara real-time.

## Fitur Utama

- **Pemantauan Kelembaban Tanah:** Memantau kondisi tanah di sawah, apakah tanah basah atau kering.
- **Data Real-time:** Menampilkan data dari sensor tanah secara periodik.
- **Dashboard Web:** Halaman web yang mudah diakses untuk memantau kondisi tanah.
- **Komunikasi antara ESP32 dan Server:** Data dari sensor tanah dikirim ke server backend menggunakan HTTP POST.
- **Status Tanah:** Menampilkan status apakah tanah basah atau kering berdasarkan pembacaan sensor.

## Struktur Proyek

