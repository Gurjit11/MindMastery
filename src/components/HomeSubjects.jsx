import React from 'react'
import { Link } from 'react-router-dom'

const HomeSubjects = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex sm:mx-10 gap-10'>

                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl border-4 border-blue-500'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/3301/3301569.png'} alt='Science' />
                        <div className='text-center font-bold'><Link to='/type/Space science'>Science</Link></div>
                    </div>
                    <div className='hidden md:block m-1'>
                        Science is a methodical approach to understanding the natural world through
                        observation and experimentation.
                    </div>
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl border-4 border-blue-500'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/4341/4341093.png'} alt='Geography' />
                        <div className='text-center font-bold'><Link to='/type/indian geography'>Geography</Link></div>
                    </div>
                    <div className='hidden md:block m-1'>
                        Geography is the study of the Earth's physical features and how people interact with them.
                    </div>
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl border-4 border-blue-500'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/3153/3153038.png'} alt='Maths' />
                        <div className='text-center font-bold'><Link to='/type/maths icse'>Maths</Link></div>
                    </div>
                    <div className='hidden md:block m-1'>
                        Mathematics is the study of numbers, shapes, and their relationships.

                    </div>

                </div>
            </div>
            <div className='flex mx-10 gap-10'>

                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl border-4 border-blue-500'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/1825/1825357.png'} alt='History' />
                        <div className='text-center font-bold'><Link to='/type/indian history'>History</Link></div>
                    </div>
                    <div className='hidden md:block m-1'>
                        History is the study of the past using written documents and artifacts to understand how societies and cultures have changed over time.
                    </div>
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl border-4 border-blue-500'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/8322/8322494.png'} alt='World Affairs' />
                        <div className='text-center font-bold'><Link to='/type/political affairs'>World Affairs</Link></div>
                    </div>
                    <div className='hidden md:block m-1'>
                        World affairs include significant global events such as the COVID-19 pandemic, climate change, conflicts, and struggles for human rights.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSubjects