import React from 'react'
import { FaInfo } from 'react-icons/fa'
const TooltipButton = ({position='bottom-10 left-0', colors=['bg-primary', 'text-white', 'group-hover:bg-secondary']}) => {
  const positionClasses = {
    bottom :{
      tooltip:'bottom-10 left-0',
      button:'bottom-12 left-0',
    }
  }
  return (
    <div className="relative group">
        <button className={`${colors.join(' ')} px-4 py-2 rounded-full cursor-pointer transition-all duration-300`}>
          <FaInfo />
        </button>
        <div className={`absolute ${position} w-64 bg-white text-black p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
    </div>
  )
}

export default TooltipButton