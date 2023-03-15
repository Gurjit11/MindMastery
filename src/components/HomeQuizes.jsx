import React from 'react'
import { Link } from 'react-router-dom'

const HomeQuizes = () => {
    return (
        <div className='flex justify-center items-center text-white'>

        <div className='flex m-10 gap-10 justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full sm:w-[70%] px-10'>
            

                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/3301/3301569.png'} alt='Science' />
                        <div className='text-center font-bold'><Link to='/quiz/science'>Science</Link></div>
                    </div>
                    
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/4341/4341093.png'} alt='Geography' />
                        <div className='text-center font-bold'><Link to='/quiz/geography'>Geography</Link></div>
                    </div>
                    
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/3153/3153038.png'} alt='Maths' />
                        <div className='text-center font-bold'><Link to='/quiz/maths'>Maths</Link></div>
                    </div>
                    

                </div>
            

                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/1825/1825357.png'} alt='History' />
                        <div className='text-center font-bold'><Link to='/quiz/history'>History</Link></div>
                    </div>
                    
                </div>
                <div className='flex  justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl'>
                    <div className='flex flex-col justify-between'>

                        <img className='md:min-w-[150px]' src={'https://cdn-icons-png.flaticon.com/512/8322/8322494.png'} alt='World Affairs' />
                        <div className='text-center font-bold'><Link to='/quiz/affairs'>World Affairs</Link></div>
                    </div>
                    
                </div>
            
        </div>
        </div>
    )
}

export default HomeQuizes