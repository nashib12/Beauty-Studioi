import React from 'react'
import ContactBgImg from '../../../public/Images/Contact/background-appointment.png'
import ContactImg from '../../../public/Images/Contact/whyusimg123.jpg'

const Contact = () => {
  return (
    <>
      <section id='contact' className='bg-[#FFF6EF]'>
         <div className='md:relative'>
            <img src={ContactBgImg} alt="Contact Background" className='hidden md:block h-[124vh] w-auto object-cover' />
         <div className='md:absolute inset-0 md:max-w-8xl mx-auto px-6 py-12 md:px-24 md:py-24 text-[#663A30]'>
            <span className='uppercase'>Book Appointment</span>
            <h2 className='text-3xl md:text-5xl mb-2 mt-3'>Bringing the joy of creativity!</h2>
            <h2 className='text-3xl md:text-5xl mb-6'>Book an Appointment</h2>
            <div className='md:grid grid-cols-3 md:gap-12 md:-ml-24'>
                <img src={ContactImg} alt="Contact Image" className='h-80 md:h-140 w-full md:w-500 object-cover mb-8' />
               <div className='col-span-2 md:pr-48'>
                 <div className='flex flex-col gap-4'>
                    <h3 className='text-3xl leading:12'>Bringing the joy of creatitvity! <br />Book an appointment</h3>
                    <p className='text-sm md:text-md'>Aliqua eiusmod culpa veniam velit ex cillum dolore minim amet dolore est.</p>
                    <form className='mt-4 grid md:grid-cols-2 gap-8'>
                        <div className='flex flex-col gap-3 text-sm '>
                            <label htmlFor="fName" className='uppercase'> First Name *</label>
                            <input id='fName' type="text" placeholder='First Name' className='border-b border-b-[#663A30] py-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-3 text-sm '>
                            <label htmlFor="lName" className='uppercase'> Last Name *</label>
                            <input id='lName' type="text" placeholder='Last Name' className='border-b border-b-[#663A30] py-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-3 text-sm '>
                            <label htmlFor="phone" className='uppercase'> Telephone *</label>
                            <input id='phone' type="text" placeholder='Telephone' className='border-b border-b-[#663A30] py-2 outline-none' />
                        </div>
                        <div className='flex flex-col gap-3 text-sm '>
                            <label htmlFor="treatment" className='uppercase'> Treatment *</label>
                            <input id='treatment' type="text" placeholder='Multi Select' className='border-b border-b-[#663A30] py-2 outline-none' />
                        </div>
                       <div className='md:col-span-2'>
                         <div className='flex flex-col gap-3 text-sm '>
                            <label htmlFor="message" className='uppercase'> Messages</label>
                            <textarea id="message" rows={6} placeholder='Note.....' className='border-b border-b-[#663A30] py-2 outline-none' />
                        </div>
                       </div>
                       <div className='md:col-span-2'>
                            <button className='text-white uppercase bg-[#663A30] hover:bg-[#663A30]/90 cursor-pointer h-12 w-full text-sm'>Submit Button</button>
                       </div>
                    </form>
                </div>
               </div>

            </div>
         </div>
         </div>
      </section>
    </>
  )
}

export default Contact
