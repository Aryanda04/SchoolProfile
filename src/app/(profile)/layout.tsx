import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import ScrollToTopButton from "@/components/profile/ScrollToTopButton";
import Image from "next/image";
import Link from "next/link";

export default function profileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

          {children}
        </div>
      </div>
      <ProfileFooter />
      <ScrollToTopButton />
    </>
  );
}
