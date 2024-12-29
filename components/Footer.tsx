"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/assets/images/ayata-logo.jpg";

const Footer = () => {
	return (
    <footer className="bg-white text-black py-8  overflow-hidden bg-feature-bg bg-center bg-no-repeat">

			<div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
					{/* Logo and Description */}
					<div className="flex flex-col items-center md:items-start">
						<Image src={logo} alt="AYATA Logo" width={100} height={40} />
						<p className="mt-4 text-gray-700 text-center md:text-left">
							AYATA Travel Solutions - Making travel easier for everyone. Book
							flights and explore the world with comfort and convenience.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/about-us" className="text-gray-600 hover:text-white">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/destinations" className="text-gray-600 hover:text-white">
									Destinations
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-gray-600 hover:text-white">
									Contact
								</Link>
							</li>
							<li>
								<Link href="/terms" className="text-gray-600 hover:text-white">
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Details */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<ul className="space-y-2 text-gray-600">
							<li>
								<strong>Email:</strong> support@ayata-travel.com
							</li>
							<li>
								<strong>Phone:</strong> +251-123-456-789
							</li>
							<li>
								<strong>Address:</strong> Addis Ababa, Ethiopia
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<hr className="my-6 border-gray-600" />

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 text-sm">
						&copy; {new Date().getFullYear()} AYATA Travel Solutions. All Rights
						Reserved.
					</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<Link href="https://facebook.com" target="_blank">
							<Image
								src="/facebook.svg"
								alt="Facebook"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
						<Link href="https://twitter.com" target="_blank">
							<Image
								src="/twitter.svg"
								alt="Twitter"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
						<Link href="https://instagram.com" target="_blank">
							<Image
								src="/instagram.svg"
								alt="Instagram"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
