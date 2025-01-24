import { FC } from "react";

const WhyChooseUs: FC = () => {
    return (
        <section className="py-12 bg-green-700">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">
                    Why Choose Us
                </h2>
                <p className="text-center text-gray-100 mb-12">
                    At Ayata Tour and Travel, we’re committed to providing exceptional
                    services and ensuring a seamless travel experience for all our
                    customers. Here’s why thousands trust us:
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.354V16M8.536 5.236a9 9 0 0110.928 0M4.066 7.42a9 9 0 0115.868 0"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Easy Flight Booking</h3>
                        <p className="text-gray-600">
                            Our simple booking process is tailored to your convenience.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 10h.01M12 10h.01M16 10h.01M21 16a2 2 0 01-2 2H5a2 2 0 01-2-2m0-4h.01M8 14h.01M12 14h.01M16 14h.01"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600">
                            Available to assist any time via phone, email, or chat.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
                        <p className="text-gray-600">
                            Testimonials from our previous travelers speak volumes about our
                            commitment to excellence.
                        </p>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center mb-12">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-100">165,489</h3>
                        <p className="text-gray-300">Support Given</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-100">254+</h3>
                        <p className="text-gray-300">Client Ratings</p>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6 text-white">What Our Customers Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600 mb-4">
                                "AYATA Travel Solutions made my trip seamless and stress-free.
                                Highly recommend!"
                            </p>
                            <h4 className="text-lg font-semibold">Elizabeth Sofia</h4>
                            <p className="text-sm text-gray-500">CEO</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600 mb-4">
                                "Outstanding service and quick response time. A fantastic
                                experience overall!"
                            </p>
                            <h4 className="text-lg font-semibold">Jillian J. Dooley</h4>
                            <p className="text-sm text-gray-500">WordPress Developer</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="italic text-gray-600 mb-4">
                                "The best travel solution I’ve ever used. Professional and
                                reliable!"
                            </p>
                            <h4 className="text-lg font-semibold">Freda B. Walker</h4>
                            <p className="text-sm text-gray-500">Traveler</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
