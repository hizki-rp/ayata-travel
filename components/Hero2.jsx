"use client";
import { useState, useEffect } from "react";

const Hero2 = () => {
	const images = [
		"/gorgora.jpg",
		"/mago.jpg",
		"/tana.jpg",
		"/omo.jpg",
		"/axum.jpg",
		"/semien.jpg",
	]; // Ensure these paths point to images in your public directory.

	const [currentIndex, setCurrentIndex] = useState(0);

	// Function to go to the previous image
	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	// Function to go to the next image
	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	// Automatic slide transition every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [images.length]);

	return (
		<div className="relative w-full h-screen bg-gray-800 text-white">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<img
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50" />
			</div>

			{/* Hero Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
				<h1 className="text-4xl md:text-6xl font-bold">
					AYATA Travel Solutions
				</h1>
				<p className="mt-4 text-lg md:text-2xl">Book Flights from anywhere</p>
				<p className="mt-2 text-sm md:text-lg">
					We make things easier, all you have to do is sit back and enjoy your
					journey.
				</p>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={handlePrevClick}
				className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-gray-600 focus:outline-none z-20"
			>
				◀
			</button>
			<button
				onClick={handleNextClick}
				className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-gray-600 focus:outline-none z-20"
			>
				▶
			</button>

			{/* Accordion Effect Thumbnails */}
			<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`cursor-pointer overflow-hidden rounded-lg border-2 ${
							currentIndex === index ? "border-white" : "border-gray-500"
						}`}
					>
						<img
							src={image}
							alt={`Thumbnail ${index + 1}`}
							className={`w-16 h-10 object-cover transition-transform ${
								currentIndex === index ? "scale-105" : "scale-95"
							}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero2;
