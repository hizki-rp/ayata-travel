"use client";
import Image from "next/image";

const images = [
    "/umrah.jpg",
    "/img-1.png",
    "/danakil.jpg",
    "/img-2.png",
    "/omo.jpg",
    "/boat.png",
    "/mago.jpg",
];

const services = [
    {
        title: "Umrah Services",
        image: images[0],
        description:
            "Experience hassle-free Umrah arrangements, including flights, accommodations, and visa assistance, tailored to your needs.",
    },
    {
        title: "Visa Consulting - Tourist",
        image: images[2],
        description:
            "Expert advice and assistance for obtaining tourist visas, ensuring a smooth and stress-free process.",
    },
    {
        title: "Hotel Booking",
        image: images[3],
        description:
            "Book top-rated hotels worldwide at the best rates, ensuring comfort and convenience during your travels.",
    },
    {
        title: "Ticketing Services",
        image: images[4],
        description:
            "Fast and reliable flight ticketing services for both domestic and international travel.",
    },
];

const ServicesPage = () => {
    return (
        <section className="min-h-screen py-12 bg-green-600">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Our Services
                </h1>
                <p className="text-lg text-gray-200 text-center mb-12">
                    At Ayata Travel Solutions, we provide comprehensive travel services to
                    meet all your needs. From religious journeys to leisure travel, we've
                    got you covered.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
