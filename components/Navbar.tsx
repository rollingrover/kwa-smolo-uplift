'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-horizontal2.png" alt="Diza Kwa-Smolo Logo" className="logo h-14 md:h-16" />
          
        </Link>

        {/* Desktop Navigation - Keep all links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/our-work" className="hover:text-accent transition-colors">Our Work</Link>
          <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
          <Link href="/get-involved" className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transition-all">Donate Now</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-1">
          <Menu size={34} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-6 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/our-work" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/get-involved" onClick={() => setIsOpen(false)} className="bg-accent text-white py-4 rounded-full text-center font-semibold">Donate Now</Link>
        </div>
      )}
    </nav>
  );
}