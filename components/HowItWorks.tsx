
const HowItWorks = () => {
	return (
		<section id="how-it-works" className="py-12 bg-white">
			<div className="max-w-6xl mx-auto px-6 my-12 ">
				<h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
				<p className="text-center text-gray-600 mb-12">
					Booking your flight with Ayata Tour and Travel is simple and
					convenient. Follow these easy steps to get your travel plans sorted
					in no time.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
					{/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-green-100 hover:delay-75">
						<div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mb-4 ">
							<span className="text-2xl font-bold">1</span>
						</div>
						<h3 className="text-xl font-semibold mb-2">Call or Fill Out Form</h3>
						<p className="text-gray-600">
							Start by giving us a call or completing our easy-to-use online
							booking form. Provide your travel details, and we’ll take care of
							the rest.
						</p>
					</div>
					{/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-green-100 hover:delay-75">
						<div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mb-4">
							<span className="text-2xl font-bold">2</span>
						</div>
						<h3 className="text-xl font-semibold mb-2">Confirm Options</h3>
						<p className="text-gray-600">
							We’ll confirm your flight options, including dates, times, and
							pricing, ensuring everything meets your needs and budget.
						</p>
					</div>
					{/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-green-100 hover:delay-75">
						<div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mb-4">
							<span className="text-2xl font-bold">3</span>
						</div>
						<h3 className="text-xl font-semibold mb-2">
							Receive Confirmation
						</h3>
						<p className="text-gray-600">
							Once confirmed, you’ll receive your booking details and
							confirmation via email or SMS. It’s that easy!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
