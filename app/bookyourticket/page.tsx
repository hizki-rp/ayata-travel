"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// API Configuration
const API_KEY = "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==";
const API_URL = "https://api.countrystatecity.in/v1";

const BookYourTicket = () => {
  const [countries, setCountries] = useState([]);
  const [departureStates, setDepartureStates] = useState([]);
  const [departureCities, setDepartureCities] = useState([]);
  const [arrivalStates, setArrivalStates] = useState([]);
  const [arrivalCities, setArrivalCities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tripType: "one-way",
      departureCountry: "",
      departureState: "",
      departureCity: "",
      arrivalCountry: "",
      arrivalState: "",
      arrivalCity: "",
      departureDate: "",
      arrivalDate: "",
    },
  });

  // Watch values for dynamic updates
  const tripType = watch("tripType");
  const departureCountry = watch("departureCountry");
  const departureState = watch("departureState");
  const arrivalCountry = watch("arrivalCountry");
  const arrivalState = watch("arrivalState");

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API_URL}/countries`, {
          headers: { "X-CSCAPI-KEY": API_KEY },
        });
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states based on selected country
  useEffect(() => {
    const fetchStates = async (countryCode: string, forDeparture: boolean) => {
      if (!countryCode) return;
      try {
        const response = await fetch(`${API_URL}/countries/${countryCode}/states`, {
          headers: { "X-CSCAPI-KEY": API_KEY },
        });
        const data = await response.json();
        if (forDeparture) {
          setDepartureStates(data);
          setDepartureCities([]);
        } else {
          setArrivalStates(data);
          setArrivalCities([]);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    if (departureCountry) fetchStates(departureCountry, true);
    if (arrivalCountry) fetchStates(arrivalCountry, false);
  }, [departureCountry, arrivalCountry]);

  // Fetch cities based on selected state
  useEffect(() => {
    const fetchCities = async (countryCode: string, stateCode: string, forDeparture: boolean) => {
      if (!countryCode || !stateCode) return;
      try {
        const response = await fetch(
          `${API_URL}/countries/${countryCode}/states/${stateCode}/cities`,
          {
            headers: { "X-CSCAPI-KEY": API_KEY },
          }
        );
        const data = await response.json();
        if (forDeparture) {
          setDepartureCities(data);
        } else {
          setArrivalCities(data);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    if (departureCountry && departureState) fetchCities(departureCountry, departureState, true);
    if (arrivalCountry && arrivalState) fetchCities(arrivalCountry, arrivalState, false);
  }, [departureCountry, departureState, arrivalCountry, arrivalState]);

  // Form submission handler
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mdkalprv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        //alert("Booking request submitted successfully!");
        const messageLabel = document.querySelector('.display-message');

        if (messageLabel) {
          // Update the label's text content with a success message
          messageLabel.textContent = "Booking request submitted successfully!";
        } else {
          console.warn("Label element with class 'display-message' not found.");
          // Consider an alternative success message display mechanism

        }
  
      } else {
        throw new Error("Failed to submit the booking request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Oops... Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Book Your Ticket</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
         {/*user information*/}
          <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="fname"
                  className="block text-gray-700 font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="lname"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-500"
                  placeholder="Enter your name"
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
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>


          </div>
         
          {/* Trip Type */}
        
          <div>
            <label className="block text-gray-700 font-medium mb-2">Trip Type</label>
            <div className="flex items-center gap-4">
              {/* One-Way Button */}
              <div>
                <input
                  id="one-way"
                  type="radio"
                  value="one-way"
                  {...register("tripType", { required: "Trip type is required" })}
                  className="hidden peer"
                />
                <label
                  htmlFor="one-way"
                  className="cursor-pointer px-6 py-2 border border-gray-300 rounded-lg text-gray-700 peer-checked:bg-green-600 peer-checked:text-white transition-all"
                >
                  One-Way
                </label>
              </div>

              {/* Round-Trip Button */}
              <div>
                <input
                  id="two-way"
                  type="radio"
                  value="two-way"
                  {...register("tripType", { required: "Trip type is required" })}
                  className="hidden peer"
                />
                <label
                  htmlFor="two-way"
                  className="cursor-pointer px-6 py-2 border border-gray-300 rounded-lg text-gray-700 peer-checked:bg-green-600 peer-checked:text-white transition-all"
                >
                  Round-Trip
                </label>
              </div>
            </div>
            <p className="text-red-600 text-sm">{errors.tripType?.message}</p>
          </div>

          
          {/* Departure Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Departure Country */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure Country
              </label>
              <select
                {...register("departureCountry", {
                  required: "Departure country is required",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Select a country</option>
                {countries.map((country: any) => (
                  <option key={country.iso2} value={country.iso2}>
                    {country.name}
                  </option>
                ))}
              </select>
              <p className="text-red-600 text-sm">{errors.departureCountry?.message}</p>
            </div>

            {/* Departure State */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure State
              </label>
              <select
                {...register("departureState", {
                  required: "Departure state is required",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                disabled={!departureStates.length}
              >
                <option value="">Select a state</option>
                {departureStates.map((state: any) => (
                  <option key={state.iso2} value={state.iso2}>
                    {state.name}
                  </option>
                ))}
              </select>
              <p className="text-red-600 text-sm">{errors.departureState?.message}</p>
            </div>
          </div>

          {/* Departure City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Departure City</label>
            <select
              {...register("departureCity", { required: "Departure city is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              disabled={!departureCities.length}
            >
              <option value="">Select a city</option>
              {departureCities.map((city: any) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <p className="text-red-600 text-sm">{errors.departureCity?.message}</p>
          </div>

       

          {/* Dates */}
        
       

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Departure Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Departure Date
              </label>
              <input
                type="date"
                {...register("departureDate", {
                  required: "Departure date is required",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="yyyy-mm-dd" // Fallback for unsupported browsers
              />
              <p className="text-red-600 text-sm">{errors.departureDate?.message}</p>
            </div>

            {/* Return Date */}
            {tripType === "two-way" && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  {...register("arrivalDate", {
                    required: "Arrival date is required for round trips",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="yyyy-mm-dd" // Fallback for unsupported browsers
                />
                <p className="text-red-600 text-sm">{errors.arrivalDate?.message}</p>
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

          <div>
            <label className="display-message text-orange-500 flex justify-center text-2xl"></label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookYourTicket;
