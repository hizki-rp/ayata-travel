"use client";
import Image from "next/image";

const images = [
    "/umrah.jpg",
    "/tourist.jpg",
    "/hotelbooking.webp",
    "/gorgora.jpg",
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
        image: images[1],
        description:
            "Expert advice and assistance for obtaining tourist visas, ensuring a smooth and stress-free process.",
    },
    {
        title: "Hotel Booking",
        image: images[2],
        description:
            "Book top-rated hotels worldwide at the best rates, ensuring comfort and convenience during your travels.",
    },
    {
        title: "Ticketing Services",
        image: images[3],
        description:
            "Fast and reliable flight ticketing services for both domestic and international travel.",
    },
];

const ServicesPage = () => {
    return (
        <section className="py-12 bg-gray-100 pb-[100px]">
            <h1 className="mt-4 text-4xl font-bold text-center mb-8 text-gray-900"> Services </h1>
           
            <div className=" max-w-6xl mx-auto px-6 ">
                <p className="text-lg w-sm text-gray-700 text-center mb-12">At Ayata Tour and Travel, we provide comprehensive travel services to meet all your needs. From religious journeys to leisure travel, we've got you covered.</p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8" >


                    {services.map((service, index) => (
                        <div key={index} className="group bg-white relative block overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative bg-white p-6 mt-4">
                                <span className="whitespace-nowrap bg-green-600 px-3 py-1.5 text-xs font-medium text-white"> {service.title} </span>

                                <h3 className="mt-4 text-lg font-medium text-gray-900"> {service.title}</h3>

                                <p className="mt-1.5 text-sm w-30 text-gray-700">{service.description}</p>

                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
