"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/ayata-logo.png";

const NAV_LINKS = [
    { key: "about", label: "About Us", href: "/about" },
    { key: "services", label: "Services", href: "/services" },
    { key: "contact", label: "Contact", href: "/contact" },
];

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="">
            <div className=" flex gap-4 max-sm:flex-col items-center justify-between text-center bg-green-600 text-white px-16 py-1 rounded font-[sans-serif] 

">
                <p className="text-base"><span className="font-bold">
                    <Image src="/email.svg" alt="phone icon" width={24} height={24} className="inline p-1 mx-2 bg-white rounded-full" />
                </span> ayatainternational@gmail.com</p>
                <p className="text-base"><span className="font-bold">
                    <Image src="/phone-call.svg" alt="phone icon" width={24} height={24} className="inline p-1 mx-2 bg-white rounded-full" />
                </span> +251 91 104 3323</p>

              
                    <Link href="https://facebook.com" target="_blank">
                        <Image
                            src="/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                        className="hover:opacity-60 shadow-xxl p-1 mx-2 bg-white rounded-full"
                        />
                    </Link>
    
            </div>

            <nav className=" flex items-center justify-between max-container padding-container relative z-30 shadow-md max-h-4 py-9">
                {/* Logo */}
                <Link href="/">
                    <Image src={logo} alt="Logo" width={80} height={35} />
                </Link>

                {/* Navigation Links (Desktop View) */}
                <ul className="hidden lg:flex h-full gap-6">
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
                    <div className="absolute top-full left-0 w-ful shadow-lg">
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

     </div>
    );
};

export default Nav;
