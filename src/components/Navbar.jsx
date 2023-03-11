import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { UserAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const user = false
  // const {user,logOut} = UserAuth()
  // console.log(user?.email)
  const [sidebar,setSidebar] = useState(false)

  const handleLogout = async () => {
    // try{
    //   await logOut()
    // }catch(err){
    //   console.error(err.message)
    // }
  }

  return (
    <div className='sticky top-0 left-0  z-50 rounded-2xl  bg-opacity-20 backdrop-blur-md drop-shadow-lg
    height-40 font-semibold '>

      <div className='mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-2 rounded-xl drop-shadow-lg shadow-2xl  p-1 '>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-extrabold text-2xl cursor-pointer text-white ml-1'>
              <Link to='/'>Crescendo</Link></h1>
          </div>

          {user?.email ? (
            <div>
              <div className='hidden md:block'>
                <button className='text-black font-bold mx-1 mr-2 p-1 hover:scale-105'
                ><Link to='/account'>Account</Link></button>
                <button onClick={handleLogout}
                className='text-white bg-black font-semibold mx-1 p-2 rounded-3xl px-3 hover:scale-105'
                >SignOut</button>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <button className='text-white font-bold mx-1 mr-2 hover:scale-105'
              ><Link to='/signup'>Sign Up</Link></button>
              <button className='text-white bg-gradient-to-r from-indigo-500 to-purple-800  font-semibold mx-1 py-2 my-1 rounded-3xl px-3 hover:scale-105'
              ><Link to='/signin'>Sign In</Link></button>
            </div>
          )}
          <div onClick={() => setSidebar(!sidebar)}
          className='text-xl rounded-full drop-shadow-lg shadow-2xl bg-white p-2 cursor-pointer md:hidden'>
            {sidebar ? <AiOutlineClose/>:<AiOutlineMenu />}
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className={sidebar ? 'md:hidden fixed left-0 top-10 flex flex-col items-center justify-between w-full h-[95%] bg-white ease-in duration-300 z-10 p-4':
       'fixed left-[-100%] top-10 flex flex-col h-[95%] items-center justify-between ease-in duration-300 z-10'}>
        <ul className='w-full'>
          <li className='font-bold my-2 py-2  px-3 drop-shadow-md shadow-md '>
            <h1 className='hover:scale-105 w-min'><Link  onClick={() => setSidebar(false)} to='/'>Home</Link></h1>
          </li>
          <li className='font-bold my-2 py-2 px-3 drop-shadow-md shadow-md'>
            <h1 className='hover:scale-105 w-min' onClick={() => setSidebar(false)}>{user?.email ? <Link   to='/account'>Account</Link>:<Link  to='/'>Account</Link>}</h1>
          </li>
        </ul>
        <div className='w-full'>
          {user?.email ? (
            <div>
              <div className='flex flex-col mb-6 w-full border-b'>
                <button onClick={handleLogout}
                className='text-white bg-black font-semibold  p-2 rounded-md drop-shadow-lg shadow-2xl hover:scale-105 hover:ease-in hover:duration-300'
                >SignOut</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col my-3 w-full border-b ">
              <button className='text-black font-bold bg-white p-2 drop-shadow-lg shadow-2xl my-3 rounded-md hover:scale-105 hover:ease-in hover:duration-300'
              ><Link onClick={() => setSidebar(false)} to='/signup'>Sign Up</Link></button>
              <button className='text-white bg-black font-semibold p-2 rounded-md drop-shadow-lg shadow-2xl hover:scale-105 hover:ease-in hover:duration-300'
              ><Link onClick={() => setSidebar(false)} to='/signin'>Sign In</Link></button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar