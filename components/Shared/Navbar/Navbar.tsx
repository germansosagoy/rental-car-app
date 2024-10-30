import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  // const { userId } = auth();

  return (
    <nav className="w-full max-w-7xl mx-auto bg-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="RentCars Logo" width={50} height={50} />
          <span className="lg:ml-3 text-xl font-medium hidden lg:block">RentalCar</span>
        </Link>
        <div className="hidden lg:flex space-x-10">
          <Link
            href="/cars"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Reservar
          </Link>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
            Cómo funciona
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600">
            ¿Por qué elegirnos?
          </a>
        </div>
        {/* auth view */}
        <div className="flex items-center space-x-6 text-[15px]">
          <SignedIn>
            <a
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-normal"
            >
              Dashboard
            </a>
            <UserButton />
          </SignedIn>
          {/* no auth view*/}
          <SignedOut>
            <a
              href="/sign-in"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Ingresar
            </a>
            <a
              href="/sign-up"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
            >
              Registrarme
            </a>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
