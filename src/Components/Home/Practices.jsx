import React from 'react'
import BgImg from '../../../public/Images/background-foundation.png'
import CheckboxImg from '../../../public/Images/Icons/check-box.png'
import ServiceImg1 from '../../../public/Images/Services/gambar.png'
import ServiceImg2 from '../../../public/Images/Services/Dailymakeupimg.jpg'

const Practices = () => {
  return (
    <>
    <section id='practices' className='bg-[#FFF6EF] pb-24'>
        <div className='md:relative'>
            <img src={BgImg} alt="Background" className='hidden md:block h-full w-auto object-cover opacity-50' />
            <div className='md:absolute inset-0 bg-[#fff6ef]/30 w-auto h-full'/>
            <div className='md:absolute inset-0 md:grid grid-cols-2 px-6 py-12 md:px-24 md:py-24 gap-6 md:gap-8'>
                <div className='flex flex-col gap-4'>
                  <span className='uppercase'>The Best Beauty Rituals</span>
                  <h2 className='text-3xl md:text-6xl md:leading-16'>We care for the perfectionist in you.</h2>
                  <p className=''>Anim ullamco et pariatur quis amet occaecat laboris. Anim ullamco et pariatur quis amet occaecat laboris.</p>
                  <ul className='flex flex-col gap-4'>
                    <li className='flex items-start gap-4'><img src={CheckboxImg} alt='checkbox' className='h-10 w-10 object-contain shrink-0' /><div><h3 className='text-[#663a30] text-2xl md:text-3xl mb-3 '>Hygiene and Safety</h3><p className='text-justify text-md'>Occaecat laborum quis sint ut eiusmod eu adipisicing do. Incididunt nisi mollit ipsum ea eiusmod duis sint velit aliqua nisi sint aliquip pariatur. Aute commodo laboris sint ullamco consequat officia dolore irure sit sint tempor sunt.</p></div></li>
                    <li className='flex items-start gap-4'><img src={CheckboxImg} alt='checkbox' className='h-10 w-10 object-contain shrink-0' /><div><h3 className='text-[#663a30] text-2xl md:text-3xl mb-3 '>Professional Services</h3><p className='text-justify text-md'>Occaecat laborum quis sint ut eiusmod eu adipisicing do. Incididunt nisi mollit ipsum ea eiusmod duis sint velit aliqua nisi sint aliquip pariatur. Aute commodo laboris sint ullamco consequat officia dolore irure sit sint tempor sunt.</p></div></li>
                    <li className='flex items-start gap-4'><img src={CheckboxImg} alt='checkbox' className='h-10 w-10 object-contain shrink-0' /><div><h3 className='text-[#663a30] text-2xl md:text-3xl mb-3 '>Stylish Makeovers</h3><p className='text-justify text-md'>Occaecat laborum quis sint ut eiusmod eu adipisicing do. Incididunt nisi mollit ipsum ea eiusmod duis sint velit aliqua nisi sint aliquip pariatur. Aute commodo laboris sint ullamco consequat officia dolore irure sit sint tempor sunt.</p></div></li>
                  </ul>
                </div>
                <div className='relative pl-8 md:pl-14 mt-6'>
                  <div className='border border-[#663a30]/20 h-80 w-60 md:h-120 md:w-100' />
                  <img src={ServiceImg2} alt="Makeup Service" className='absolute inset-0 pt-4 pl-12 md:pt-6 md:pl-20 h-90 w-auto md:h-160 md:w-140 object-cover ' />
                  <img src={ServiceImg1} alt="Mekup Flower" className='absolute z-10 h-32 w-48 -bottom-16 right-0 md:h-56 md:w-72 md:-bottom-14 md:-right-16' />
                </div>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Practices
