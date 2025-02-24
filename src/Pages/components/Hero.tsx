
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
    return (
        <div className='mb-10 mt-24 md:mt-28 m-10  flex flex-col md:flex-row justify-between '>

            <div className=' w-full md:w-5/12 m-5 md:m-14 md:mt-[16px]'>
                <h1 className='text-3xl md:text-5xl font-bold py-2'>Bringing Stories to Life,</h1>
                <h1 className='text-xl md:text-2xl font-semibold pb-5'>Live updates, Exclusive Reports & trending News.</h1>
                <p className='text-sm lg:text-md'>Welcome to a dynamic platform where compelling stories unfold, bringing you real-time updates, in-depth exclusive reports, and the latest trends that shape our world. Stay informed, stay inspired, and be part of the conversation.</p>
            </div>
            <div className=" flex flex-col p-2 md:p-2   rounded-md border  md:block md:relative md:w-[550px] md:h-[300px] ')] md:bg-cover md:mr-20  md:rounded-lg">

                {/* Black Overlay */}

                <Carousel>
                    <CarouselContent>
                        {/* <div className="absolute top-0 left-0 ml-1 w-[450px] rounded-3xl h-[400px] bg-black opacity-100">
  </div> */}
                        <CarouselItem><video src="../../videos/ABAKCS3M.mp4" autoPlay muted loop controls ></video></CarouselItem>
                        <CarouselItem><video src="https://res.cloudinary.com/dgmh9hpsj/video/upload/v1740411285/l1stpahtrfbueyao1mcd.mp4" autoPlay muted loop controls ></video></CarouselItem>

                        {/* Content */}



                    </CarouselContent>


                    <CarouselPrevious />
                    <CarouselNext />

                </Carousel>
                {/* <div className='w-full h-full flex  flex-col p-6 pb-20 justify-end items-end'>

  <h1 className="relative text-white w-full py-1 z-10"></h1>
  <h1 className="relative text-white z-10"><span className='font-semibold'>Community Planting Day: </span> A group of volunteers working together in a community garden to plant new vegetation.</h1>
  </div> */}
            </div>




        </div>
    )
}

export default Hero
