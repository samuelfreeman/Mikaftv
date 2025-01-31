
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className='w-full h-full   mt-16 lg:mb-52  mb-40'>
            <div className="relative  bg-cover bg-center pb-16 h-full " style={{ backgroundImage: "url('/heroimg.jpeg')" }}>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-85 w-full h-full"></div>
                {/* Content */}
                <div className="relative z-10 flex  justify-center items-center h-screen  text-white  ">
                    <h1 className='  h-screen p-20' >



                        <span style={{ color: 'white', fontWeight: 'bold' }} className='text-4xl lg:text-6xl  w-5  '>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Coming soon...','Embracing diversity in language, culture, and perspectives.','Upholding truth, fairness, and accuracy in all content.']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={90}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    
                </div>
              
            </div>

        </div>
    )
}

export default Hero
