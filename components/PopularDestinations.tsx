
import Image from "next/image";

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
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-8">
					Popular places to visit
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
					{destinations.map((destination, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-green-100 hover:delay-75"
						>
							<Image
								src={destination.image}
								alt={destination.name}
								width={400}
								height={300}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-2">
									{destination.name}
								</h3>
								<p className="text-gray-700 mb-4">{destination.description}</p>
								<p className="text-sm text-gray-500">
									<strong>Location:</strong> {destination.location}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularDestinations;
