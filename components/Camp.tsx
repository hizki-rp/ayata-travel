import React from 'react'
import Image from 'next/image'
import { PEOPLE_URL } from '@/constants'

type CampProps = {
    backgroundImage: string,
    title: string,
    subtitle: string,
    peopleJoined: string,
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}:CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
                <div className='flexCenter gap-4 '>
                    <div className='rounded-full bg-green-500 p-4 '>
                       <Image src="/folded-map.svg" alt="map" width={28} height={28} />
                    </div>
                    <div className='flex flex-col gap-1 '>
                        <h4 className='bold-18 text-white'>{title}</h4>
                        <p className='regular-14 text-white'>{subtitle}</p>
                    </div>
                </div>
                <div className='flexCenter gap-6 '>
                    <span className='flex -space-x-4 overflow-hidden'>
                        {PEOPLE_URL.map((url) => (
                            <Image src={url} key={url} alt="person" width={52} height={52} className="rounded-full border-white" />
                        ))}
                    </span>
                    <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
                </div>
          </div>
        </div>
    )
}
const Camp = () => {
  return (
      <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg-py-20 xl:mb-20 ' >
          <div className='hide-scrollbar flex h-[340px] w-full items-between justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-740px]'>
              <CampSite backgroundImage="bg-bg-img-1" title="gorgora" subtitle="North Gonder" peopleJoined="50+ Tickets booked" />
              
              <CampSite backgroundImage="bg-bg-img-2" title="Halala Kella" subtitle="Southwestern Ethiopia" peopleJoined="50+ Tickets booked" />
           </div>

      </section>
  )
}

export default Camp