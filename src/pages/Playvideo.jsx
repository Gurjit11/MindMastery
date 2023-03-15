import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { FetchFromAPI } from "../contexts/FetchFromAPI";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

const Playvideo = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { idtaken } = useParams();

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${idtaken}`)
      .then((data) => setVideoDetail(data?.items[0]))

      console.log(videoDetail)

    // FetchFromAPI(`search?part=snippet&relatedToVideoId=${idtaken}&type=video`)
    //   .then((data) => setVideos(data?.items))
  }, [idtaken]);

//   if(!videoDetail?.snippet) return <Loader />;

//   const { snippet: {}, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="h-[95vh] flex justify-center items-center">
      
          <div className="w-screen h-[95vh] sticky flex justify-center items-center" >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${idtaken}`} className='w-full md:min-w-[1200px] md:min-h-[650px] max-h-[420px] max-w-[420px]'  controls />
            <h1>
              {/* {title} */}
            </h1>
            
          </div>
        
    </div>
  );
};
const TestPlayvideo = () => (
    <ErrorBoundary>
      <Playvideo />
    </ErrorBoundary>
  );

export default TestPlayvideo;