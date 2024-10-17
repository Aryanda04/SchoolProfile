import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import Image from "next/image";
import Link from "next/link";

const KesetaraanPage = () => {
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

          <h1 className="text-3xl font-bold mb-6">Program Kesetaraan</h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Apa itu Program Kesetaraan?
            </h2>
            <p className="text-gray-700 mb-4">
              Program Kesetaraan adalah program pendidikan nonformal yang
              memberikan kesempatan bagi masyarakat yang belum menyelesaikan
              pendidikan formal untuk memperoleh ijazah setara dengan SD (Paket
              A), SMP (Paket B), atau SMA (Paket C).
            </p>
            <Image
              src="/kesetaraan-main.jpg"
              alt="Program Kesetaraan"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
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
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Image
                  key={index}
                  src={`/kesetaraan-${index}.jpg`}
                  alt={`Kegiatan Kesetaraan ${index}`}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProfileFooter />
    </>
  );
};

export default KesetaraanPage;
