import React from 'react'

const Step = (props) => {
  return (
    <div className="flex flex-col gap-5 pt-6 pb-8 px-4 text-white bg-[#ffffff18] rounded-[10px] cursor-pointer">
      <div className="h-[3.5rem] w-[3.5rem] flex items-center justify-center text-[#10A969] rounded-full bg-[#73954318]">
        <span className='font-bold'>{props.no}</span>
      </div>
      <h2 className="font-bold text-[20px]">{props.title}</h2>
      <p className="text-[#AAB2BA]">
        Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donnec odio.
      </p>
    </div>
  );
}

export default Step