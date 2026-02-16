import React from 'react'
import TeamImg1 from '../../../public/Images/Team/team1.jpg'
import TeamImg2 from '../../../public/Images/Team/team2.jpg'
import TeamImg3 from '../../../public/Images/Team/team3.jpg'
import TeamImg4 from '../../../public/Images/Team/team4.jpg'

const Team = () => {
    const teamList = [
        {id : 1, img : TeamImg1, title : "Tiana", post : "Founder & Hair Styler" },
        {id : 2, img : TeamImg3, title : "Sofia", post : "Co-founder & Fashion Styler" },
        {id : 3, img : TeamImg4, title : "Efrina", post : "Makeup Artist" },
        {id : 4, img : TeamImg2, title : "Nita", post : "Makeup Styler" },
    ];
  return (
    <>
      <section id='gallery'>
        <div className='md:max-w-8xl mx-auto px-6 py-12 md:px-24 md:pb-24 text-center'>
            <span className='uppercase'>Our Team</span>
            <h3 className='text-3xl md:text-6xl mt-3 mb-8'>Professional cosmetologists</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {teamList.map(item => (
                    <div key={item.id} className='relative group'>
                    <img src={item.img} alt="Team" className='h-130 w-full object-cover' />
                    <div className='absolute inset-0 group-hover:hidden bg-black/20 h-130 w-full' />
                    <div className='absolute inset-0 pt-8 px-8 flex flex-col gap-0'>
                        <div className='border border-white h-90 w-full ' />
                        <button className='bg-white w-full h-12'><h3 className='text-3xl text-[#663A30]'>{item.title}</h3></button>
                        <p className='text-white my-2'>{item.post}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Team
