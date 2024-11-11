import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";
import {FaFacebook} from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
    title: 'Canedom - Empowering the Visually Impaired',
    description: 'Canedom - Supporting the Blind with Resources and Opportunities',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="flex flex-col min-h-screen">
      {/* Navigation */}


      <Nav/>



      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4">
          {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-4">
          <div className="container mx-auto flex justify-between items-center">
              <div>Copyright ©2024 Canedom</div>
              <div>
                  <a href="https://www.facebook.com/profile.php?id=61555456581920" target="_blank" rel="noopener noreferrer"
                     className="text-orange-500 hover:text-white">
                      <FaFacebook size={24}/>
                  </a>
              </div>
          </div>
      </footer>
      </body>
      </html>


  );
}
