import React from 'react'
import PriceImg from '../../../public/Images/pricetreatment123.jpg'

const Prices = () => {
  return (
    <>
      <section id='prices' >
            <div className='md:max-w-7xl mx-auto px-6 py-12 md:px-24 md:py-24'>
                <div className='grid md:grid-cols-2'>
                    <div className='relative'>
                        <div className='border border-[#663A30]/30 ml-10 md:ml-14 h-80 w-74 md:h-120 md:w-100' />
                        <img src={PriceImg} alt="Treatment Price" className='absolute inset-0 pt-4 md:pt-6 pl-4 md:pl-0 h-100 md:h-140 w-auto object-cover' />
                        <div className='bg-[#663A30] px-4 h-36 w-94 md:h-40 mt-28 md:mt-0 md:absolute -bottom-12 -left-14 md:bottom-12 md:-left-22 text-white flex items-center gap-4'>
                            <h2 className='text-5xl md:text-7xl italic '>12+</h2>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-3xl leading-10'>Years Experience</h2>
                                <p className='text-sm md:text-md'>Sunt laborum culpa veniam nostrud laborum velit tempor aute sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 text-[#663A30] mt-12 md:mt-4'>
                        <span className='uppercase'>Treatment & Prices</span>
                        <h2 className='text-3xl md:text-5xl md:leading-14 mb-6'>Because Being Beautiful Should Never Harm You</h2>
                        <ul className='flex flex-col gap-6'>
                            <li className='flex items-center justify-between'><div><p className='text-2xl'>Face Treatments</p><p className='text-sm mt-1'>There are many variations of passages</p></div><h3 className='text-3xl'>$50</h3></li>
                            <li className='flex items-center justify-between'><div><p className='text-2xl'>Facial & Massage</p><p className='text-sm mt-1'>There are many variations of passages</p></div><h3 className='text-3xl'>$50</h3></li>
                            <li className='flex items-center justify-between'><div><p className='text-2xl'>Hair Treatment</p><p className='text-sm mt-1'>There are many variations of passages</p></div><h3 className='text-3xl'>$50</h3></li>
                            <li className='flex items-center justify-between'><div><p className='text-2xl'>Manicure & Pedicure</p><p className='text-sm mt-1'>There are many variations of passages</p></div><h3 className='text-3xl'>$50</h3></li>
                            <li className='flex items-center justify-between'><div><p className='text-2xl'>Hand/nail Moisturizer</p><p className='text-sm mt-1'>There are many variations of passages</p></div><h3 className='text-3xl'>$50</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default Prices
