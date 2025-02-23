import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-newsletter bg-cover  rounded-md h-[50vh] relative md:flex justify-around items-center mx-7 p-10 '>
            <h1 className='text-white font-bold md:text-4xl text-center '>Subscribe to our news letter</h1>
            <div className='p-4 md:w-1/3'>
                <h1 className='text-white font-bold text-sm py-4 text-center '>Subscribe to our newsletter and never miss an update on trending stories, exclusive interviews, and upcoming programs.</h1>


                <div className="flex  items-center space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Button className='bg-[#27BBA4]' type="submit">Subscribe</Button>
                </div>

            </div>
        </div>
    )
}

export default Newsletter
