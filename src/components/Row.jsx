// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Typevideos from '../pages/Typevideos'
import { useParams } from 'react-router-dom'

const Row = () => {
    const {type} = useParams()



    // useEffect(() => {
    //     axios.get(fetchURL).then((response) => {
    //         setMovies(response.data.results)
    //     })
    // }, [fetchURL])
    

    // console.log(movies)



    return (
        <>
            <h2 className=' font-bold md:text-xl p-4'>{type.toUpperCase()}</h2>
            <Typevideos type={type} />
        </>
    )
}

export default Row