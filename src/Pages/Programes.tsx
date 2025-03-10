
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Shows from './components/Shows'
import Footer from './components/Footer'
import { NavLink } from 'react-router'
import { motion } from 'framer-motion'


const Programes = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div>
                <Navbar />
                <Banner />
                <Shows />

                {/* Content */}
                <div className='px-3 md:px-16 text-justify mb-10 '>
                    {/* button */}
                    <div className='flex justify-end my-5'>
                        <button className='bg-[#27BBA4] px-6 py-2 text-white font-medium rounded-md hover:bg-[#13675a] duration-300'><NavLink to={'/about'}>View more</NavLink></button>
                    </div>
                    {/* text */}
                    <div>
                        <p className='text-sm lg:text-lg'>A New Era of Entertainment, News, and Insights – Coming Soon to Mikaf TV!</p>
                        <p className='text-sm lg:text-lg'>Get ready for an exciting transformation on Mikaf TV as we introduce a dynamic lineup of fresh and engaging programs tailored just for you! From thought-provoking discussions on health and wellness with Afia Bemah, to in-depth news reports on community events with Steve Kells, and the hottest entertainment trends on VybZone 360, we’re bringing you unmatched content that informs, entertains, and inspires. But that’s not all! No matter your interest, Mikaf TV is your go-to destination for the best in television programming. Stay tuned, because something amazing is on the way!</p>
                    </div>
                </div>
                
                <Footer />
            </div>
        </motion.div>
    )
}

export default Programes
