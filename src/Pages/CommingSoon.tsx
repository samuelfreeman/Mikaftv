import Navbar from '../assets/Navbar'

import { Typewriter } from 'react-simple-typewriter'

const CommingSoon = () => {
    return (
        <div className='bg-black w-full h-full'>
            <Navbar />
            <div className='flex justify-center items-center'>
                <h1 className='  h-screen p-20' >



                    <span style={{ color: 'white', fontWeight: 'bold' }} className='text-4xl lg:text-6xl  w-5  '>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Coming soon...', 'Embracing diversity in language, culture, and perspectives.', 'Upholding truth, fairness, and accuracy in all content.']}
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
    )
}

export default CommingSoon
