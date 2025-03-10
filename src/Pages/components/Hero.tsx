
import lifepills from '../../assets/LIFEPILLS.mp4'
const Hero = () => {
    return (
        <div className='mb-10 mt-24 lg:mt-28   m-7 flex flex-col lg:flex-row justify-between '>

            <div className=' w-full lg:w-5/12 m-5 -ml-1 lg:m-14 lg:mt-[16px]'>
                <h1 className='text-2xl md:text-5xl font-bold py-2'>Bringing Stories to Life,</h1>
                <h1 className='text-xl  lg:text-2xl font-semibold pb-5'>Live updates, Exclusive Reports & trending News.</h1>
                <p className='text-sm md:text-lg lg:text-md'>Welcome to a dynamic platform where compelling stories unfold, bringing you real-time updates, in-depth exclusive reports, and the latest trends that shape our world. Stay informed, stay inspired, and be part of the conversation.</p>
            </div>
            <div className=" flex flex-col mx-2  p-1 md:p-2   rounded-md border  md:block md:relative md:w-[550px] md:min-h-[200px] md:max-h-[320px] lg:min-h-[320px] ')] md:bg-cover md:mr-20  md:rounded-lg">

                {/* Black Overlay */}



                {/* <div className="absolute top-0 left-0 ml-1 w-[450px] rounded-3xl h-[400px] bg-black opacity-100">
  </div> */}
                {/* <CarouselItem><video src={abakcsem} autoPlay muted loop controls ></video></CarouselItem>
                        <CarouselItem><video src={vybzone} autoPlay muted loop controls ></video></CarouselItem> */}
                <video src={lifepills} autoPlay muted loop controls ></video>
                {/* Content */}






                {/* <div className='w-full h-full flex  flex-col p-6 pb-20 justify-end items-end'>

  <h1 className="relative text-white w-full py-1 z-10"></h1>
  <h1 className="relative text-white z-10"><span className='font-semibold'>Community Planting Day: </span> A group of volunteers working together in a community garden to plant new vegetation.</h1>
  </div> */}
            </div>




        </div>
    )
}

export default Hero
