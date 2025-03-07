

const Banner = () => {
  return (
    <div className='w-full flex-col justify-center mt-20 space-y-5 items-center '>
        <div className='w-full flex justify-center gap-2 p-2 '>
            <h1 className="text-center">Programes</h1>
            {/* <div className=' -mt-5 mb-5 w-17 md:mb-0 md:-mt-0  h-6 border-black border-b-2 md:border-r-2 '></div> */}
            <div className='flex gap-2 border px-1  rounded-md items-center'>

            <img width={"19"} height={"10"} src="/notificaiton.png" alt="notification icon" />
            <p className='md:text-sm'>Follow Our Lineups & Stay Tuned</p>
            </div>
        </div>
        <div className='w-full text-center flex justify-center'>
            <h1 className='md:w-[50%] min-w-[50%]'>Great shows are on the way! Stay tuned for an exciting lineup of programs, exclusive content, and the latest trends. Check back soon for updates!</h1>
        </div>
      <hr />
    </div>
  )
}

export default Banner
