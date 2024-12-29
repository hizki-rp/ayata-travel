"use client";

import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section 1 */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4">Have a Destination?</h2>
                    <p className="text-lg">
                        Reach out to us, and we'll create a schedule that fits your needs
                        and budget!
                    </p>
                </div>

                {/* Section 2 */}
                <div>
                    <Link href="/contact">
                        <button className="bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition-colors">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
