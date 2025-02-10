import Navbar from '@/Navbar'

import SubNav from './SubNav'
import Hero from './Hero'
import Updates from './Updates'
import ImageGallery from './ImageGallery'
import TelemarketPromotion from './TeleMarketing'
import { SiteFooter } from './Footer'
import VideoDisplay from './ImageGallery'
import { useState } from 'react'

const Home = () => {
  const [category, setCategory] = useState<string>('Trending');
  return (
    <div>
      <Navbar />
      <div className='h-screen'>
        <SubNav onCategoryChange={setCategory}  selectedCategory={category}/>
        <Hero  />
        <Updates/>
        <VideoDisplay category={category}/>
        <TelemarketPromotion/>
        <SiteFooter/>
      </div>
    </div>
  )
}

export default Home
