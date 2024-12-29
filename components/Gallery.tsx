"use client";
import { useState } from "react";
import Image from "next/image";

const Gallery = () => {
    const destinations = [
        {
            name: "Lalibela",
            image: "/lalibela.jpg", // Place in public folder
            description: "Known for its rock-hewn churches, a UNESCO World Heritage Site.",
        },
        {
            name: "Simien Mountains",
            image: "/semien.jpg", // Place in public folder
            description:
                "Dramatic peaks, unique wildlife like the Gelada baboon, and breathtaking views.",
        },
        {
            name: "Lake Tana",
            image: "/tana.jpg", // Place in public folder
            description:
                "Ethiopia's largest lake, home to ancient monasteries and stunning scenery.",
        },
        {
            name: "Axum",
            image: "/axum.jpg", // Place in public folder
            description:
                "An ancient city with obelisks, historical relics, and a rich cultural heritage.",
        },
        {
            name: "Nech Sar National Park",
            image: "/nechsar.jpg", // Place in public folder
            description:
                "A diverse ecosystem with wildlife and stunning views of lakes Abaya and Chamo.",
        },
        {
            name: "Mago National Park",
            image: "/mago.jpg", // Place in public folder
            description:
                "Home to the Mursi tribe and abundant wildlife, offering a unique cultural experience.",
        },
        {
            name: "Danakil Depression",
            image: "/danakil.jpg", // Place in public folder
            description:
                "One of the hottest places on Earth, featuring salt flats, sulfur springs, and volcanoes.",
        },
        {
            name: "Omo Valley",
            image: "/omo.jpg", // Place in public folder
            description:
                "A region rich in cultural diversity, home to many indigenous tribes.",
        },
    
    ];

    const [detailsVisible, setDetailsVisible] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8">
                    Amazing Tourist Destinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className="relative group bg-gray-200 overflow-hidden rounded-lg shadow-md"
                        >
                            {/* Image */}
                            <Image
                                src={destination.image}
                                alt={destination.name}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Text Overlay */}
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 p-4 text-center transition-opacity duration-300 ${detailsVisible === index || "group-hover:opacity-100"
                                    } ${detailsVisible !== index && "opacity-0"
                                    } text-white`}
                            >
                                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                                <p className="text-sm mb-4">{destination.description}</p>
                                <button
                                    className="bg-white text-black px-4 py-2 rounded-full"
                                    onClick={() =>
                                        setDetailsVisible(detailsVisible === index ? null : index)
                                    }
                                >
                                    {detailsVisible === index ? "Close" : "View Details"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
