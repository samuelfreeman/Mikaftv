import Navbar from './components/Navbar'


import Hero from './components/Hero'
import Updates from './components/Updates'

import TelemarketPromotion from './components/TeleMarketing'
import Footer from './components/Footer'
import VideoDisplay from './components/ImageGallery'
import { useState } from 'react'
import Controls from './components/SubNav'
import { motion } from 'framer-motion'
// import Location from './Location'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Trending');
  const handleCategoryChange = (category: string) => {
    console.log(category)
    setSelectedCategory(category);
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        exit={{ opacity: 0, y: -50 }} // Fade out and move up when leaving
        transition={{ duration: 0.5 }}
        
      >
        <Navbar />
        <div className='h-screen'>
          <Controls onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
          <Hero />
          <Updates />
          <div id="target-section">

            <VideoDisplay category={selectedCategory} />
          </div>
          <TelemarketPromotion />

          <Footer />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
