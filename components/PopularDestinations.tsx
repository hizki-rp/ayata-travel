
import Image from "next/image";

import { Metadata } from 'next';


export const metadata: Metadata = {
	title: "Popular Destinations"
}

const PopularDestinations = () => {
	const destinations = [
		{
			name: "Nech Sar National Park",
			image: "/nechsar.jpg", // Add this image to the public folder
			description:
				"Known for its breathtaking landscapes, wildlife, and the famous 'Bridge of God' between Lake Abaya and Lake Chamo.",
			location: "Arba Minch, Ethiopia",
		},
		{
			name: "Mago National Park",
			image: "/mago.jpg", // Add this image to the public folder
			description:
				"Home to diverse wildlife and the Mursi tribe, Mago National Park offers an unparalleled experience of Ethiopia's natural beauty.",
			location: "Southern Ethiopia",
		},
		{
			name: "Simien Mountains",
			image: "/semien.jpg", // Add this image to the public folder
			description:
				"A UNESCO World Heritage Site, the Simien Mountains are famous for their dramatic peaks, cliffs, and unique wildlife, including the Gelada baboon.",
			location: "Northern Ethiopia",
		},
	];

	return (
		<section className="py-12 bg-gray-100">
			<h1 className="mt-4 text-4xl font-medium text-center mb-8 text-gray-900"> Popular Destinations </h1>
			<div className=" max-w-6xl mx-auto px-6 ">
				<div className=" grid grid-cols-1 md:grid-cols-3 gap-8" >
			
		
						{destinations.map((destination, index) => (
							<div key={index} className="group bg-white relative block overflow-hidden">
								<img
									src={destination.image}
									alt={destination.name}
									className="rounded-sm h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
								/>

								<div className="relative bg-white p-6 mt-4">
									<span className="whitespace-nowrap bg-green-600 px-3 py-1.5 text-xs font-medium text-white"> {destination.name} </span>

									<h3 className="mt-4 text-lg font-medium text-gray-900">Location: { destination.location}</h3>

									<p className="mt-1.5 text-sm w-30 text-gray-700">{ destination.description}</p>

								</div>	
				        </div>
							
						))}
				
				</div>	
		  </div>
		</section>
	);
};

export default PopularDestinations;
