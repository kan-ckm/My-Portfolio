import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='mb-[100px] pb-10 w-full md:mb-2 ' id='contact'>

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple-200'> your</span> digital presence to the next level?
                </h1>
                <p className='text-slate-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how. I can help you achieve your goals.</p>
                <a href="https://www.facebook.com/tomato.tomato.289738?mibextid=ZbWKwL" target='_blank' className='btn'>
                    <MagicButton title="Let' s Get in touch" icon={<FaLocationArrow />} position='right' />
                </a>
            </div>
            <div className='flex  mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copy right © 2025 Kan-kcm</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {
                        socialMedia.map((profile) => (
                            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg rounded-lg border border-white/10 saturate-180 bg-opacity-75 bg-[#000319] '>
                                <Link href={profile.url} target='_blank'>
                                    <img src={profile.img} alt={profile.id} className='w-4 h-4' />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer