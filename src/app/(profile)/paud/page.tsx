import Image from "next/image";

const PAUDPage = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          Pendidikan Anak Usia Dini (PAUD)
        </h1>

        <p className="text-gray-700 mb-4">
          PAUD singkatan dari Pendidikan Anak Usia Dini merupakan suatu upaya
          pembinaan yang ditujukan bagi anak sejak lahir sampai dengan usia enam
          tahun yang dilakukan melalui pemberian rangsangan pendidikan untuk
          membantu pertumbuhan dan perkembangan jasmani dan rohani agar anak
          memiliki kesiapan dalam memasuki pendidikan lebih lanjut, yang
          diselenggarakan pada jalur formal, nonformal, dan informal.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="/dummy2.jpg"
            alt="PAUD"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <p className="text-gray-700 mb-4">
          Pendidikan anak usia dini merupakan salah satu bentuk penyelenggaraan
          pendidikan yang menitikberatkan pada peletakan dasar ke arah
          pertumbuhan dan perkembangan fisik (koordinasi motorik halus dan
          kasar), kecerdasan (daya pikir, daya cipta, kecerdasan emosi,
          kecerdasan spiritual), sosio emosional (sikap dan perilaku serta
          agama) bahasa dan komunikasi, sesuai dengan keunikan dan tahap-tahap
          perkembangan yang dilalui oleh anak usia dini.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Tujuan PAUD</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2">
            <strong>Tujuan utama:</strong> untuk membentuk anak Indonesia yang
            berkualitas, yaitu anak yang tumbuh dan berkembang sesuai dengan
            tingkat perkembangannya sehingga memiliki kesiapan yang optimal di
            dalam memasuki pendidikan dasar serta mengarungi kehidupan di masa
            dewasa.
          </li>
          <li>
            <strong>Tujuan penyerta:</strong> untuk membantu menyiapkan anak
            mencapai kesiapan belajar (akademik) di sekolah.
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Rentangan anak usia dini menurut Pasal 28 UU Sisdiknas No.20/2003 ayat
          1 adalah 0-6 tahun. PAUD pada Pendidikan formal adalah (TK) sedangkan
          pada pendidikan Nonformal seperti Kelompok Bermain, Taman Panitipan
          Anak, Sekolah Minggu, Taman Pendidikan Al-Qur &apos; an.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Ruang Lingkup PAUD</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>KB (2-4 tahun)</li>
          <li>TK (4-6 tahun)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          PAUD Junior di SKB Belitung
        </h2>
        <p className="text-gray-700 mb-4">
          PAUD Junior adalah layanan pendidikan anak usia dini yang
          diselenggarakan oleh SKB Belitung. PAUD Junior membuka dua kelas yaitu
          Kelompok Bermain (KB) untuk usia 2-4 tahun dan TK untuk usia 4-6
          tahun. Dengan empat tenaga pendidik yang profesional dan sayang anak
          menjadikan PAUD Junior sebagai salah satu pendidikan anak usia dini
          terbaik di Belitung.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Fasilitas PAUD Junior:
        </h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Taman bermain yang luas, modern dan ramah anak</li>
          <li>Alat permainan edukatif lengkap</li>
          <li>Ruang belajar ber AC</li>
          <li>Kolam renang</li>
          <li>Drumband</li>
          <li>Fieldtrip</li>
          <li>Sarana Audio Visual dan IT yang canggih</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Galeri Kegiatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src={`/dummy${index}.jpg`}
              alt={`Kegiatan PAUD ${index}`}
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

export default PAUDPage;
