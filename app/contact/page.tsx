"use client";

import Image from "next/image";

const Contact = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    Have a question or need assistance with your travel plans? Fill out
                    the form below, or reach us through our contact details.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li>
                                <strong>Address:</strong>
                                <p>Addis Ababa, Ethiopia</p>
                            </li>
                            <li>
                                <strong>Phone:</strong>
                                <p>+251-123-456-789</p>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <p>ayatainternational@gmail.com</p>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4">Our Location</h3>
                            {/* Placeholder for Map */}
                            <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Map Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                        <form action="https://getform.io/f/axooqmwb" method="post">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Phone number
                                </label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Write your message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

             
                </div>
            </div>
        </section>
    );
};

export default Contact;
