import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { FetchFromAPI } from '../contexts/FetchFromAPI'

import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

const Typevideos = ({ type }) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${type}`)
            .then((data) => setVideos(data.items))
    }, [type])

    const slideLeft = () => {
        var slider = document.getElementById('slider' )
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
     console.log(videos)

    return (
     
        <div className='relative flex items-center group justify-center m-10'>
           <div id={`slider`} className='gap-3 grid lg:grid-cols-4 w-full'>

        { videos.map((item,id) => (
                <div key={id}>
                    {item.id.videoId &&<VideoCard  video={item} />}
                    {/* {item.id.channelId && {}} */}
                    {console.log(item)}
                </div>
            ))}
        </div>
       </div>
    )
}

export default Typevideos
