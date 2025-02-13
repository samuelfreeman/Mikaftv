

const Banner = () => {
  return (
    <div className='w-full flex-col justify-center mt-20 space-y-5 items-center '>
        <div className='w-full flex justify-center gap-2 '>
            <h1>Programes</h1>
            <span className=' w-3 h-6 border-black border-r-2 '></span>
            <div className='flex gap-2 border px-1  rounded-md'>

            <img width={"25"} src="/notificaiton.png" alt="notification icon" />
            <p className='text-sm'>Follow Our Lineups & Stay Tuned</p>
            </div>
        </div>
        <div className='w-full text-center flex justify-center'>
            <h1 className='w-[50%]'>Great shows are on the way! Stay tuned for an exciting lineup of programs, exclusive content, and the latest trends. Check back soon for updates!</h1>
        </div>
      <hr />
    </div>
  )
}

export default Banner
