import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">Why Choose Us</h2>
                <p className="text-center regular-16 text-gray-100 mb-12">
                    At AYATA Travel Solutions, we’re committed to providing exceptional
                    services and ensuring a seamless travel experience for all our
                    customers. Here’s why thousands trust us:
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image
                            src="/icons/trusted.svg"
                            alt="Trusted by Thousands"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
                        <p className="text-gray-600">
                            Testimonials from our previous travelers speak volumes about our
                            commitment to excellence.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image
                            src="/icons/support.svg"
                            alt="24/7 Customer Support"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600">
                            Available to assist any time via phone, email, or chat.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image
                            src="/icons/booking.svg"
                            alt="Easy Flight Booking"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Easy Flight Booking</h3>
                        <p className="text-gray-600">
                            Our simple booking process is tailored to your convenience.
                        </p>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                    <div>
                        <h3 className="text-3xl font-bold text-green-600">165,489</h3>
                        <p className="text-gray-600">Support Given</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-green-600">254+</h3>
                        <p className="text-gray-600">Clients Rating</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-green-600">2 M+</h3>
                        <p className="text-gray-600">Money Saved</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-green-600">578</h3>
                        <p className="text-gray-600">Awards Won</p>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-white">What Our Customers Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="italic text-gray-600 mb-4">
                                "Behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts separated."
                            </p>
                            <h4 className="text-lg font-semibold">Elizabeth Sofia</h4>
                            <p className="text-sm text-gray-500">CEO</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="italic text-gray-600 mb-4">
                                "Behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts separated."
                            </p>
                            <h4 className="text-lg font-semibold">Jillian J. Dooley</h4>
                            <p className="text-sm text-gray-500">WordPress Developer</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="italic text-gray-600 mb-4">
                                "Behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts separated."
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
