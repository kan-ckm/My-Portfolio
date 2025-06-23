import { workExperience } from '@/data'
import React from 'react'
import { Button } from '@/components/ui/MovingBorder'
const Exprience = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>
                My
                <span className='text-purple-200'> Work Experience</span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button key={card.id}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                        duration={Math.floor(Math.random() * 10000) + 10000}>
                        <div className='flex flex-col lg:flex-row md:p-5 lg:p-10 lg:items-center p-3 py-6 gap-2'>
                            <img src={card.thumbnail} alt={card.title} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-semibold'>
                                    {
                                        card.title
                                    }
                                </h1>
                                <p className='text-start text-slate-100 mt-3 font-semibold'>
                                    {
                                        card.desc
                                    }
                                </p>

                            </div>

                        </div>
                    </Button>
                ))}
            </div>
        </div >
    )
}

export default Exprience
