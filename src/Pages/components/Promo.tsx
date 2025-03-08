import { Button } from '@/components/ui/button'

import { NavLink } from 'react-router'

const Promo = () => {
    return (
        <div className='w-full md:w-full min-h-[80vh] md:max-h-[80vh] mt-24 mb-32 px-4 md:px-10 md:pl-14 space-y-3'>
            <h1 className='text-xl md:text-2xl font-semibold'>Grow your Business Promo</h1>
            <p>Boost Your Brand with Powerful Promotions.</p>
            <div className='border-b-4 w-2/6 md:w-1/6 p-1 border-[#24918D]'></div>
            <p className='text-sm lg:text-lg'>In today's fast-paced digital world, visibility is everything. At Mikaf TV, we provide businesses with a high-impact advertising platform that ensures your brand reaches the right audience at the right time. Whether you’re a small startup, a growing company, or an established enterprise, our tailored promotional solutions will help you increase brand awareness, attract more customers, and drive significant sales growth. Our TV and digital marketing promotions allow you to showcase your products and services to thousands of potential customers daily while running targeted advertisements that reach specific demographics based on location, interests, and behavior. With professional video production, compelling storytelling, and prime-time exposure, we ensure that your brand stands out from the competition.</p>
            <p className='text-sm lg:text-lg'>

                Beyond traditional ads, we offer unique opportunities such as sponsored content, interviews, and brand features that allow businesses to engage deeply with their audience. By leveraging our media expertise, your business can benefit from increased credibility, customer trust, and stronger market positioning. No matter your industry; retail, fashion, real estate, hospitality, tech, education, or entertainment. Mikaf TV is your gateway to reaching new heights in business growth. Our expert team will work closely with you to craft the perfect promotional strategy, ensuring maximum return on investment and long-term success.</p>
            <p className='text-sm lg:text-lg'>

                Ready to take your business to the next level? Partner with Mikaf TV today and let’s make your brand the talk of the town!
                Limited Spaces Available! Secure your slot now and take your business to the next level. <Button variant={"link"} className='font-semibold text-md'><NavLink to={"/termsandconditions"}>Terms & Conditions Apply.</NavLink> </Button></p>
            <div className='border-t-2 pt-5 '>
                <p className='text-sm lg:text-lg'>Call us now at <span className='text-[#24918D]'>0322009247, 0556818815.</span>  </p>
                <p className='text-sm lg:text-lg'>Visit us in person — find our location on the map on our <Button variant={"link"} className='-px-1  text-md text-[#24918D]'><NavLink to={"/about"}>About Us</NavLink> </Button> page. </p>
            </div>
        </div>
    )
}

export default Promo
