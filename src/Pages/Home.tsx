import Navbar from '@/Navbar'

import Hero from './Hero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen'>
      <Hero/>
      </div>
    </div>
  )
}

export default Home
