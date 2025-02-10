import React from 'react'

const Hero = () => {
    return (
        <div className=' mt-56 flex justify-between '>
            
            <div className='w-5/12 m-14'>
                <h1 className='text-5xl font-bold py-2'>Bringing Stories to Life,</h1>
                <h1 className='text-2xl font-semibold pb-5'>Live updates, Exclusive Reports & trending News.</h1>
                <p className='text-md'>Welcome to a dynamic platform where compelling stories unfold, bringing you real-time updates, in-depth exclusive reports, and the latest trends that shape our world. Stay informed, stay inspired, and be part of the conversation.</p>
            </div>
            <div className="relative w-[450px] h-[450px] bg-[url('/heroimg.svg')] bg-cover mr-20 overflow-hidden rounded-lg">
  {/* Black Overlay */}
  <div className="absolute top-0 left-0 ml-1 w-[450px] rounded-3xl h-[445px] bg-black opacity-50"></div>

  {/* Content */}
  <div className='w-full h-full flex  flex-col p-6 pb-10 justify-end items-end'>

  <h1 className="relative text-white w-full py-4 z-10">Agriculture - 1h ago</h1>
  <h1 className="relative text-white z-10"><span className='font-semibold'>Community Planting Day: </span> A group of volunteers working together in a community garden to plant new vegetation.</h1>
  </div>
</div>




        </div>
    )
}

export default Hero
