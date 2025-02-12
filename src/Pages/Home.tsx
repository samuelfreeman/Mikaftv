import Navbar from './components/Navbar'


import Hero from './components/Hero'
import Updates from './components/Updates'

import TelemarketPromotion from './components/TeleMarketing'
import { SiteFooter } from './components/Footer'
import VideoDisplay from './components/ImageGallery'
import { useState } from 'react'
import Controls from './components/SubNav'
import Location from './components/Location'
// import Location from './Location'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Trending');
  const handleCategoryChange = (category: string) => {
    console.log(category)
    setSelectedCategory(category);
  };
  return (
    <div>
      <Navbar />
      <div className='h-screen'>
        <Controls onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        <Hero />
        <Updates />
        <div id="target-section">

          <VideoDisplay category={selectedCategory} />
        </div>
          <TelemarketPromotion />
        <Location />
        <SiteFooter />
      </div>
    </div>
  )
}

export default Home
