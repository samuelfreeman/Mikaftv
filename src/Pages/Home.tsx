import Navbar from '@/Navbar'


import Hero from './Hero'
import Updates from './Updates'

import TelemarketPromotion from './TeleMarketing'
import { SiteFooter } from './Footer'
import VideoDisplay from './ImageGallery'
import { useState } from 'react'
import Controls from './SubNav'
import Location from './Location'
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
        <VideoDisplay category={selectedCategory} />
        <TelemarketPromotion />
        <Location />
        <SiteFooter />
      </div>
    </div>
  )
}

export default Home
