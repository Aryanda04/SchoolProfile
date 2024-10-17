import Image from "next/image";

const ProfileFooter = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image src="/skbbelitung.png" alt="" width={40} height={40} />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              SKB Belitung
            </span>
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Kontak
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telepon:</p>
            (0719)-24253
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            skbbelitung2@gmail.com
          </div>
          <div className="flex flex-col">
            <p className="mr-1 text-gray-800">Alamat:</p>
            <p className="mr-1 text-gray-800">
              Jl. Jend. Sudirman, KM.7, Desa Perawas, Kec. Tantungpandan, Kab.
              Belitung, Prov. Kepulauan Bangka Belitung 33413
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Sosial Media
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/skbbelitung?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/skbbelitung"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 UPT SPNF SKB Belitung.
        </p>
      </div>
    </div>
  );
};

export default ProfileFooter;
