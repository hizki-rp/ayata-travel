"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../app/assets/images/ayata-logo.jpg";
import { NAV_LINKS } from "@/constants";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between max-container padding-container relative z-30 py-4 bg-white shadow-md">
            {/* Logo */}
            <Link href="/">
                <Image src={logo} alt="Logo" width={100} height={35} />
            </Link>

            {/* Navigation Links (Desktop View) */}
            <ul className="hidden lg:flex h-full gap-8">
                {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link
                            href={link.href}
                            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu (Mobile View) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="focus:outline-none"
                >
                    <Image
                        src={isMenuOpen ? "/close.svg"  : "/menu.svg"}
                        alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                        width={32}
                        height={32} 
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg">
                    <ul className="flex flex-col items-center py-4 gap-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={link.href}
                                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
