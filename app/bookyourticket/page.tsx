"use client";
import { useState } from "react";

const BookYourTicket = () => {
  const [formData, setFormData] = useState({
    tripType: "one-way", // Default trip type
    departureCountry: "",
    departureCity: "",
    arrivalCountry: "",
    arrivalCity: "",
    departureDate: "",
    arrivalDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
      template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
      user_id: "YOUR_PUBLIC_KEY", // Replace with your EmailJS Public Key
      template_params: {
        tripType: formData.tripType,
        departure: `${formData.departureCity}, ${formData.departureCountry}`,
        arrival: `${formData.arrivalCity}, ${formData.arrivalCountry}`,
        departureDate: formData.departureDate,
        arrivalDate: formData.tripType === "two-way" ? formData.arrivalDate : "N/A",
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Booking request sent successfully!");
        setFormData({
          tripType: "one-way",
          departureCountry: "",
          departureCity: "",
          arrivalCountry: "",
          arrivalCity: "",
          departureDate: "",
          arrivalDate: "",
        });
      } else {
        throw new Error("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Oops... Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Book Your Ticket</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Trip Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Trip Type
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={formData.tripType === "one-way"}
                  onChange={handleChange}
                />
                One-Way
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tripType"
                  value="two-way"
                  checked={formData.tripType === "two-way"}
                  onChange={handleChange}
                />
                Round-Trip
              </label>
            </div>
          </div>

          {/* Departure Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure Country
              </label>
              <input
                type="text"
                name="departureCountry"
                value={formData.departureCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure City
              </label>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          {/* Arrival Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Arrival Country
              </label>
              <input
                type="text"
                name="arrivalCountry"
                value={formData.arrivalCountry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Arrival City
              </label>
              <input
                type="text"
                name="arrivalCity"
                value={formData.arrivalCity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {formData.tripType === "two-way" && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Arrival Date
                </label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookYourTicket;
