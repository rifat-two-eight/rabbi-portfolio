import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-6 w-full z-50 flex justify-center px-4 ">
      <nav className="w-full max-w-7xl h-14 bg-[#111111]/80 backdrop-blur-xl border border-white/30 rounded-full px-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="h-14 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-white/65">
          <Link href="#work" className="hover:text-[#FF6B00] transition-colors duration-200">
            Work
          </Link>
          <Link href="#about" className="hover:text-[#FF6B00] transition-colors duration-200">
            About
          </Link>
          <Link href="#contact" className="hover:text-[#FF6B00] transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="bg-[#FF6B00] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#FF8533] hover:shadow-[0_0_18px_rgba(255,107,0,0.5)] transition-all duration-200"
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;