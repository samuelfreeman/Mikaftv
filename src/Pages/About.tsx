import CoreValues from "./components/CoreValues"
import Footer from "./components/Footer"
import Location from "./components/Location"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Team from "./components/Team"
import { motion } from "framer-motion"

const About = () => {
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
            <div className="min-h-[20vh] w-full mt-10 md:mt-20 flex flex-col space-y-7 p-4 md:pr-36 justify-center items-center text-center md:space-x-40">
                <div> <h1 className="text-4xl font-bold pt-10  md:pl-32">About Us</h1></div>
                <div className="text-center space-y-5 ">
                    <p>Welcome to Mikaf TV, your ultimate destination for vibrant, engaging, and commercially driven television programming. Based in Kumasi, Mikaf TV is a bilingual station that embraces Ghana’s rich cultural diversity while ensuring mass accessibility through dominant local-language content.</p>
                    <p>As a dynamic and innovative broadcaster, we are committed to entertaining, informing, and empowering our audience with top-quality content that resonates with everyday life. Our programming spans across business, lifestyle, entertainment, faith-based discussions, social issues, and more—designed to keep our viewers connected, inspired, and well-informed.</p>
                    <p>At Mikaf TV, we believe television should be inclusive and impactful. We uphold values of professionalism, excellence, and integrity, ensuring that our content remains family-friendly, morally upright, and commercially viable. Whether through insightful talk shows, captivating entertainment, or thought-provoking discussions, we provide a platform where voices are heard, ideas are shared, and lives are transformed.</p>
                    <p>Join us on this exciting journey as we redefine television broadcasting with a fresh, engaging, and people-centered approach. Mikaf TV—“Where Stories Come Alive.”</p>

                </div>
            </div>
            <CoreValues/>
            <Team/>
            <Location/>
            <Newsletter/>
            <Footer />
        </div>
            </motion.div>
    )
}

export default About
