import Image from "next/image";

const TBMPage = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          Taman Bacaan Masyarakat (TBM) SKB Belitung
        </h1>

        <p className="text-gray-700 mb-4">
          TBM SKB Belitung merupakan sumber informasi, media pendidikan, media
          rekreasi, dan media riset bagi masyarakat umum sebagai salah satu
          bentuk layanan dari SKB Belitung guna mendukung program pendidikan
          untuk masyarakat serta meningkatkan budaya literasi. Masyarakat diberi
          ruang untuk membaca, berdiskusi, menulis, mengikuti lomba-lomba
          literasi, mendapat pelatihan membuat handycraft seperti membuat boneka
          jari, gantungan kunci, dan kegiatan serupa lainnya yang dilengkapi
          dengan bahan bacaan dan materi multimedia lain.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="/dummy-tbm.jpg"
            alt="TBM SKB Belitung"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Ruang Baca TBM SKB Belitung
        </h2>
        <p className="text-gray-700 mb-4">
          TBM SKB Belitung memiliki fasilitas Wi-Fi gratis untuk pengunjung.
          Ruangannya nyaman, modern, dan pemandangan sekitar yang bagus. Koleksi
          buku lengkap dari ilmu pengetahuan umum, sastra, agama, sosial, seni,
          sains, dll. yang bisa dipinjam secara gratis oleh masyarakat.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Fasilitas:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Free Wi-Fi</li>
          <li>Ruangan nyaman</li>
          <li>View bagus</li>
          <li>Buku lengkap</li>
          <li>Akses mudah</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Alamat TBM SKB Belitung
        </h2>
        <p className="text-gray-700 mb-4">
          Gedung TBM UPTD SPNF SKB Belitung, Jl. Jend. Sudirman, KM.7, Desa
          Perawas, Kec. Tantungpandan, Kab. Belitung, Prov. Kepulauan Bangka
          Belitung 33413.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Galeri TBM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src={`/dummy-tbm${index}.jpg`}
              alt={`TBM SKB Belitung ${index}`}
              width={300}
              height={200}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TBMPage;
