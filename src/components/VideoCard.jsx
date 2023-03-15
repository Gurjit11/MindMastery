import React from 'react'
import { AiFillCiCircle } from 'react-icons/ai';
import { Link } from "react-router-dom"; 
// import { Typography, Card, CardContent, CardMedia } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <div className='w-[300px] rounded-xl overflow-hidden shadow-2xl p-2 h-full'>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      < img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}   />
    </Link>
    <div class="group relative max-w-7xl mx-auto">
 <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 max-h-2 pb-2"></div>

  
   
 
</div>
    <div >
      
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <p >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <p>
          {snippet?.channelTitle || demoChannelTitle}
          <AiFillCiCircle/>
        </p>
      </Link>
    </div>
  </div>
);

export default VideoCard