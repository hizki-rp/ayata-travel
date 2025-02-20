import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title : "About"
}

const AboutUs = () => {
    return (
        <section className="py-16 bg-gray-100 pb-[200px]">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

                {/* About Us Content */}
                <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                    {/* Company Name */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Ayata Tour and Travel</h2>
                        <p className="text-lg text-gray-700">
                            Ayata Tour and Travel is a trusted travel company that has been
                            delivering unforgettable travel experiences since 2014. Based in the
                            heart of Addis Ababa, we specialize in crafting unique and
                            customized tour packages for our clients, ensuring every journey is
                            a memorable adventure.
                        </p>
                    </div>

                    {/* Since Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Since 2014</h3>
                        <p className="text-lg text-gray-700">
                            With nearly a decade of experience, we pride ourselves on providing
                            top-notch travel services, whether it's for business or leisure. Our
                            experienced team works tirelessly to cater to the needs of travelers
                            from all walks of life.
                        </p>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Our Office Location</h3>
                        <p className="text-lg text-gray-700">
                            We are proudly based in Addis Ababa, Ethiopia. Our office is located
                            in the city center, making it convenient for our clients to visit
                            us and discuss their travel plans in person.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
