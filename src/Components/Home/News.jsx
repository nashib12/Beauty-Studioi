import React from 'react'
import BgImage from '../../../public/Images/backgroundflower11.png'
import ServiceImg1 from '../../../public/Images/Services/Event-amkeupimg1223.jpg'
import ServiceImg2 from '../../../public/Images/Services/servicesdailymakeup.jpg'

const News = () => {
  return (
    <>
      <section id='experiences' className='md:py-12 mb-132 md:mb-24'>
        <div className='relative'>
            <img src={BgImage} alt="Background" className='h-screen md:h-120 w-auto object-cover' />
            <div className='absolute inset-0 md:max-w-8xl mx-auto px-6 py-12 md:px-24 text-[#663A30] grid md:grid-cols-3 gap-6'>
                <div>
                    <span className='uppercase text-sm'>Articles & News</span>
                    <h2 className='text-3xl md:text-6xl my-3'>Latest News </h2>
                    <p>Sunt culpa qui duis est consectetur ullamco ea officia ex enim cillum.</p>
                    <button className='bg-[#663A30] text-white cursor-pointer hover:bg-[#663A30]/90 transition duration-300 ease-out hover:-translate-y-2 uppercase text-sm h-12 w-36 mt-4'>More Article</button>
                </div>
                <div className='border border-[#663a30]/40 h-136 w-full transition ease-in-out duration-500 hover:bg-[#663a30] px-8 pt-8 overflow-hidden cursor-pointer group flex flex-col items-center justify-center'>
                    <img src={ServiceImg2} alt="Makeup Service" className='h-100 w-auto object-cover transition ease-in-out duration-500 group-hover:scale-105' />
                    <p className='group-hover:text-white mt-6 text-lg text-light'>Chic & Glam: Your Daily Dose of Beauty Inspiration</p>
                </div>
                <div className='border border-[#663a30]/40 h-136 w-full transition ease-in-out duration-500 hover:bg-[#663a30] px-8 pt-8 overflow-hidden cursor-pointer group flex flex-col items-center justify-center'>
                    <img src={ServiceImg1} alt="Makeup Service" className='h-100 w-auto object-cover transition ease-in-out duration-500 group-hover:scale-105' />
                    <p className='group-hover:text-white mt-6 text-lg text-light'>Unveiling Beauty: Your Guide to Radiant Hair, Skin, and Style</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default News
