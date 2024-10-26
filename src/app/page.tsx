import ImageSlideshow from "@/components/profile/ImageSlideShow";
import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import ScrollToTopButton from "@/components/profile/ScrollToTopButton";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfileNavbar />
      <main className="flex-grow">
        <div className="relative h-[70vh]">
          <Image
            src="https://placehold.co/1600x900"
            alt="Hero Image"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover amazing content and experiences
              </p>
              <Link href="/formpendaftaran">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Daftar Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Profil Sekolah Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Profil Sekolah Kami
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://placehold.co/600x400"
                  alt="Foto Sekolah"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  SKB Belitung adalah unit pelaksana teknis dinas yang berbentuk
                  satuan pendidikan non formal penyelenggara Pendidikan Anak
                  Usia Dini dan pendidikan masyarakat dibawah Dinas Pendidikan
                  dan Kebudayaan Kabupaten Belitung.
                </p>
                <p className="text-lg">
                  AKREDITASI UPT SKB BELITUNG memiliki akreditasi B, berdasarkan
                  sertifikat 194/BAN PAUD DAN PNF/AKR/2019.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Visi Misi Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Visi dan Misi Sekolah
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Visi
                </h3>
                <p className="text-lg">
                  Mewujudkan Masyarakat Cerdas, Terampil dan Berakhlak Mulia
                  Melalui Pendidikan Non Formal.
                </p>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">
                  Misi
                </h3>
                {/* <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Meningkatkan Ketaqwaan Melalui Kegiatan Keagamaan.</li>
                  <li>
                    Mewujudkan Pendidikan yang Bermutu, Efisien dan Relevan.
                  </li>
                  <li>
                    Mempersiapkan Peserta Didik Agar dapat Berdaya Saing di
                    Lingkungan Masyarakat.
                  </li>
                  <li>
                    Mempersiapkan Peserta Didik untuk Melanjutkan Pendidikan ke
                    Jenjang yang Lebih Tinggi
                  </li>
                  <li>
                    Mempersiapkan Peserta Didik Masuk ke Dunia Kerja dengan
                    Memberikan Keterampilan bersifat Soft Skill dan Keterampilan
                    Vokasi.
                  </li>
                  <li>
                    Membudayakan Peserta Didik Menggunakan Teknologi informasi
                    dan Komunikasi dalam Kegiatan Pembelajaran.
                  </li>
                  <li>
                    Terlaksananya Pengembangan Kurikulum yang Meliputi 8 Standar
                    Pendidikan.
                  </li>
                  <li>
                    Tercapainya Lingkungan SPNF SKB Belitung yang Bersih, Asri
                    dan Nyaman.
                  </li>
                </ul> */}
                <ul className="space-y-2 text-sm">
                  {[
                    "Meningkatkan Ketaqwaan Melalui Kegiatan Keagamaan.",
                    "Mewujudkan Pendidikan yang Bermutu, Efisien dan Relevan.",
                    "Mempersiapkan Peserta Didik Agar dapat Berdaya Saing di Lingkungan Masyarakat.",
                    "Mempersiapkan Peserta Didik untuk Melanjutkan Pendidikan ke Jenjang yang Lebih Tinggi",
                    "Mempersiapkan Peserta Didik Masuk ke Dunia Kerja dengan Memberikan Keterampilan bersifat Soft Skill dan Keterampilan Vokasi.",
                    "Membudayakan Peserta Didik Menggunakan Teknologi informasi dan Komunikasi dalam Kegiatan Pembelajaran.",
                    "Terlaksananya Pengembangan Kurikulum yang Meliputi 8 Standar Pendidikan.",
                    "Tercapainya Lingkungan SPNF SKB Belitung yang Bersih, Asri dan Nyaman.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0 mt-1"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Sekolah Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Program Unggulan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "PAUD (KB dan TK)",
                  description:
                    "Kurikulum yang komprehensif dan challenging untuk mempersiapkan siswa ke jenjang pendidikan tinggi.",
                },
                {
                  title: "Pendidikan Kesetaraan Paket A",
                  description:
                    "Fokus pada pembentukan karakter dan soft skills yang penting untuk kesuksesan di masa depan.",
                },
                {
                  title: "Pendidikan Kesetaraan Paket B",
                  description:
                    "Penguasaan bahasa asing untuk mempersiapkan siswa menghadapi era globalisasi.",
                },
                {
                  title: "Pendidikan Kesetaraan Paket C",
                  description:
                    "Pembelajaran berbasis teknologi untuk mengembangkan keterampilan digital dan inovasi.",
                },
                {
                  title: "Taman Bacaan Masyarakat",
                  description:
                    "Mengembangkan bakat seni dan kreativitas siswa melalui berbagai kegiatan ekstrakurikuler.",
                },
              ].map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">
                    {program.title}
                  </h3>
                  <p>{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Image Slideshow Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Galeri Kegiatan
            </h2>
            <ImageSlideshow />
          </div>
        </section>
      </main>
      <ProfileFooter />
      <ScrollToTopButton />
    </div>
  );
};

export default Homepage;
