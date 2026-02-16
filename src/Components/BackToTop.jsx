import React from 'react'
import { RxDoubleArrowUp } from 'react-icons/rx'


const BackToTop = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({top : 0, left : 0, behavior : "smooth"})}
          className="flex items-center justify-center bg-[#663A30] text-white hover:text-[#663A30] hover:bg-[#f5f5f5] hover:border hover:border-[#c97a4f] rounded-lg w-10 h-10 text-sm md:text-lg cursor-pointer hover:scale-105 transition-transform ease-out duration-300"
        >
          <RxDoubleArrowUp size={22} />
        </button>
      </div>
  )
}

export default BackToTop
