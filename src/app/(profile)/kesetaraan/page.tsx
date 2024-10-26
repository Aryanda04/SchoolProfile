import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import Image from "next/image";
import Link from "next/link";

const KesetaraanPage = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Program Kesetaraan</h2>
        <p className="text-gray-700 mb-4">
          Program Kesetaraan adalah program pendidikan nonformal yang memberikan
          kesempatan bagi masyarakat yang belum menyelesaikan pendidikan formal
          untuk memperoleh ijazah setara dengan SD (Paket A), SMP (Paket B),
          atau SMA (Paket C).
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/dummy5.jpg"
            alt="Program Kesetaraan"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Kurikulum pendidikan kesetaraan disesuaikan dengan kemampuan warga
          belajar dan tidak sepadat seperti pendidikan formal. Waktu
          pembelajaran juga disesuaikan dengan kondisi warga belajar sehingga
          warga belajar lebih mudah mengikuti proses pembelajaran.
          Pembelajarannya menggunakan buku dan handout seperti di pendidikan
          formal. Bedanya, di pendidikan kesetaraan ada modul mandiri yaitu
          pembelajaran jarak jauh dengan tugas terstruktur dan dibimbing secara
          online dalam menyelesaiakan tugas tersebut.
        </p>
        <p className="text-gray-700 mb-4">
          Dalam pendidikan kesetaraan selain diberikan materi ilmu pengetahuan
          juga diberikan materi kecakapan hidup (life skill). Diharapkan dengan
          adanya kecakapan hidup ini warga belajar akan mampu mandiri dan mampu
          menciptakan lapangan usaha bagi diri mereka sendiri. Adapun kecakapan
          hidup yang diberikan tergantung pada karakteristik tempat kegiatan
          pembelajaran berlangsung.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Jenis Program Kesetaraan
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Paket A (setara SD)</li>
          <li>Paket B (setara SMP)</li>
          <li>Paket C (setara SMA)</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Galeri Kegiatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[5, 6, 7, 8].map((index) => (
            <Image
              key={index}
              src={`/dummy${index}.jpg`}
              alt={`Kegiatan Kesetaraan ${index}`}
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

export default KesetaraanPage;
