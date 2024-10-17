import ProfileNavbar from "@/components/profile/ProfileNavbar";
import ProfileFooter from "@/components/profile/ProfileFooter";
import Link from "next/link";
import Image from "next/image";

const TentangKamiPage = () => {
  return (
    <>
      <ProfileNavbar />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-block mb-6 text-blue-600 hover:text-blue-800"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Kembali ke Halaman Beranda
            </span>
          </Link>
          <main className="flex-grow bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8 text-center">
                Tentang UPT SPNF SKB Belitung
              </h1>
              <div className="mb-12">
                <Image
                  src="/sekolahSKB.jpg"
                  alt="UPT SPNF SKB Belitung"
                  width={1200}
                  height={600}
                  className="w-full h-80 rounded-lg shadow-md"
                />
              </div>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Sejarah</h2>
                <p className="text-gray-700">
                  SKB diresmikan oleh Bapak Menkokesra Alamsyah Ratu
                  Perwiranegara pada tanggal 2 Maret 1987. Sanggar Kegiatan
                  Belajar dengan Kepmendikbud RI Nomor 036/O/1989 tanggal 20
                  Januari 1989 tentang Organisasi dan Tata Kerja SKB dengan nama
                  SKB Tanjungpandan secara Teknis dibina oleh Ditjen Diklusepora
                  hingga diterbitkannya Kepmendikbud RI Nomor 023/O/1997 tanggal
                  20 Februari 1997 tentang Organisasi dan Tata Kerja SKB.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Visi</h2>
                <p className="text-gray-700">
                  Mewujudkan masyarakat cerdas, terampil dan berakhlak mulia
                  melalui Pendidikan Nonformal
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Misi</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Meningkatkan Ketaqwaan melalui kegiatan keagamaan</li>
                  <li>
                    Mewujudkan Pendidikan yang bermutu, efisien dan Relevan
                  </li>
                  <li>
                    Mempersiapkan Peserta Didik agar dapat berdaya saing
                    dilingkungan masyarakat
                  </li>
                  <li>
                    Mempersiapkan peserta didik untuk melanjutkan pendidikan ke
                    jenjang yang lebih tinggi
                  </li>
                  <li>
                    Mempersiapkan peserta didik masuk ke dunia kerja dengan
                    memberikan keterampilan bersifat Soft Skill dan keterampilan
                    Vokasi
                  </li>
                  <li>
                    Membuadayakan peserta didik menggunakan teknologi informasi
                    dan komunikasi dalam kegiatan pembelajaran
                  </li>
                  <li>
                    Terlaksananya pengembangan kurikulum yang meliputi 8 Standar
                    Pendidikan
                  </li>
                  <li>
                    Tercapainya lingkungan SPNF SKB Belitung yang bersih, Asri
                    dan nyaman
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Kedudukan</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Sanggar Kegiatan Belajar merupakan UPT Satuan Pendidikan
                    Nonformal pada Dinas Pendidikan dan Kebudayaan Kabupaten
                    Belitung.
                  </li>
                  <li>
                    UPT Sanggar Kegiatan Belajar dipimpin oleh seorang tenaga
                    fungsional pamong belajar yang diberi tugas tambahan sebagai
                    kepala SKB yang dalam melaksanakan tugasnya berada dibawah
                    dan bertanggungjawab kepada Kepala Dinas Pendidikan dan
                    Kebudayaan Kabupaten Belitung melalui Kepala Bidang
                    Pendidikan Anak Usia Dini dan Nonformal.
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Tugas dan Fungsi
                </h2>
                <p className="text-gray-700 mb-4">
                  Melaksanakan sebagian Tugas Dinas dalam menyelenggarakan
                  membina, mendampingi dan membuat percontohan pelaksanaan
                  program PAUD dan Pendidikan Masyarakat.
                </p>
                <h3 className="text-xl font-semibold mb-2">Fungsi:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Penyusunan Program PAUD dan Pendidikan Masyarakat</li>
                  <li>Pelaksanaan Program PAUD dan Pendidikan Masyarakat</li>
                  <li>
                    Pelaksanaan Pembinaan PendidikanPAUD dan Tenaga Kependidikan
                    serta Satuan Pendidikan Nonformal Lainnya
                  </li>
                  <li>
                    Pendampingan bagi Satuan Pendidikan lain yang
                    menyelenggarakan Program Pendidikan Masyarakat
                  </li>
                  <li>
                    Pembuatan Percontohan Program PAUD dan Pendidikan Masyarakat
                  </li>
                  <li>Pengkajian Program PAUD dan Pendidikan Masyarakat</li>
                  <li>
                    Pelaksanaan Pusat Penyelenggaraan Penilaian Program PAUD dan
                    Pendidikan Masyarakat
                  </li>
                  <li>Pelaksanaan Pengabdian Masyarakat</li>
                  <li>
                    Pemberian Motivasi kepada Masyarakat dalam rangka
                    terciptanya masyarakat gemar belajar
                  </li>
                  <li>
                    Pelayanan Informasi kegiatan program PAUD dan Pendidikan
                    Masyarakat
                  </li>
                  <li>
                    Pengintegrasian dan Sinkronisasi kegiatan Program PAUD dan
                    Pendidikan Masyarakat
                  </li>
                  <li>
                    Pelaksanaan Monitoring dan Evaluasi kegiatan di lingkup UPT
                    Sanggar Kegiatan Belajar
                  </li>
                  <li>
                    Pelaksanaan Tugas-tugas lain yang diberikan oleh atasan
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
      <ProfileFooter />
    </>
  );
};

export default TentangKamiPage;
