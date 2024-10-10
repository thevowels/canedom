import Image from "next/image";
import Link from "next/link";
import { FaEye, FaBullhorn } from "react-icons/fa"; // Importing icons

export default function Home() {
  return (
      <div className="container mx-auto p-4 max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-8">
          <Image src="/canedom-logo.png" alt="Canedom Logo" width={150} height={150} className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Welcome to Canedom</h1>
          <p className="mt-2 text-lg text-gray-600">Empowering the Visually Impaired Community in Myanmar</p>
        </header>

        {/* About Us Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p>
            At Canedom, our focus is on empowering the visually impaired community in Myanmar. Our aim is to enhance their mobility independence and introduce them to diverse career possibilities. The organization's name, 'Canedom,' combines 'cane,' which represents the white cane, and 'dom,' which signifies freedom.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            At Canedom, our focus is on empowering the visually impaired community in Myanmar. Our aim is to enhance their mobility independence and introduce them to diverse career possibilities. The organization's name, 'Canedom,' combines 'cane,' which represents the white cane, and 'dom,' which signifies freedom.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <p>
            Canedom offers a residential training program that enables individuals to achieve independence in daily living. We do this by developing essential skills, employability skills, and building self-confidence. Our program serves as a guide for the visually impaired, steering them towards new opportunities and promoting inclusivity in society. It is a transformative experience that not only equips individuals with practical skills but also encourages their active participation in diverse aspects of community life.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-8">
          <Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            Support Our Mission
          </Link>
        </section>
      </div>
  );
}
