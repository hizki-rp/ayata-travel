import Image from "next/image"


const Guide = () => {
  return (
      <section className="flexCenter flex-col max-container gap-15 my-16">
          <div className="padding-container w-full my-4">
              <Image src="/camp.svg" alt="camp" width={50} height={50} />
              <p>We are here for you</p>
              <div className=" flex flex-wrap justify-between gap-5 lg:gap-10">
                  <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
                  <p className="regular-16 text-gray-30 xl:max-w-[540px]">We are dedicated to making your travel experience seamless and enjoyable. Our team of experts is here to guide you through every step of your journey, ensuring you have access to the best destinations, convenient booking processes, and exceptional customer support. Whether you're exploring the historic sites of Lalibela or embarking on an adventure in the Simien Mountains, we provide personalized assistance to make your trip memorable.</p>      
              </div>
          </div>
          <div className="flexCenter relative w-full">
              <Image src="/boat.png" alt="boat" width={1440} height={580} className="w-full object-cover object-center 2xl:rounded-5xl" />
              <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
                  
                  <Image src="/meter.svg" alt="meter" width={16} height={158} />
                  <div className="flexBetween flex-col">
                      <div className="flex w-full flex-col">
                          <div className="flexBetween w-full">
                              <p className="regular-16 text-gray-20">Destination </p>
                              <p className="bold-16 text-green-50">48 min</p>
                          </div>
                          <p className="bold-20 mt-2">Gorgora</p>
                      </div>

                      <div className="flex w-full flex-col mt-6"> 
                              <p className="regular-16 text-gray-20">Start track </p>
                              <h4 className="bold-20 whitespace-nowrap">current location</h4>
                       
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Guide