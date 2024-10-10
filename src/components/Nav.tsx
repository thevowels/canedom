"use client";

import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import icons
import Image from 'next/image';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false); // State for drawer

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-800 bg-opacity-80 text-white p-4">
            <div className="container mx-auto flex justify-between items-center border-b border-gray-600">
                {/* Logo */}
                <div>
                    <a href="/">
                        <Image src="/canedom-logo.png" alt="Canedom Logo" width={120} height={40} />
                    </a>
                </div>

                {/* Hamburger Icon for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        <FaBars size={24} />
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:border-b-2 border-orange-500">Home</a>
                    <a href="/about" className="hover:border-b-2 border-orange-500">Who We Are</a>
                    <a href="/contact" className="hover:border-b-2 border-orange-500">Get in Touch</a>
                    <a href="/programs" className="hover:border-b-2 border-orange-500">Programs</a> {/* Added Programs */}
                    <a href="/newsletter" className="hover:border-b-2 border-orange-500">Newsletter</a> {/* Added Newsletter */}
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 text-white p-4">
                    <a href="/" className="block py-2 hover:border-b-2 border-orange-500">Home</a>
                    <a href="/about" className="block py-2 hover:border-b-2 border-orange-500">Who We Are</a>
                    <a href="/contact" className="block py-2 hover:border-b-2 border-orange-500">Get in Touch</a>
                    <a href="/programs" className="block py-2 hover:border-b-2 border-orange-500">Programs</a> {/* Added Programs */}
                    <a href="/newsletter" className="block py-2 hover:border-b-2 border-orange-500">Newsletter</a> {/* Added Newsletter */}
                </div>
            )}
        </nav>
    );
}
