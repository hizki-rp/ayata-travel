"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/ayata-logo.jpg";

const NAV_LINKS = [
    { key: "about", label: "About Us", href: "/about" },
    { key: "services", label: "Services", href: "/services" },
    { key: "contact", label: "Contact", href: "/contact" },
];

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between max-container padding-container relative z-30 bg-white shadow-md">
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
                <Link href="/bookyourticket">
                    <button className="bg-green-600 text-gray-200 px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-green-700 transition-colors">
                        Book Now
                    </button>
                </Link>
            </ul>

            {/* Hamburger Menu (Mobile View) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="focus:outline-none"
                >
                    <Image
                        src={isMenuOpen ? "/close.svg" : "/menu.svg"}
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
                        <Link href="/bookyourticket">
                            <button className="bg-green-600 text-gray-200 px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-green-700 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Book Now
                            </button>
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
