import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { FetchFromAPI } from "../contexts/FetchFromAPI";

const Typevideos = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${type}`).then((data) =>
      setVideos(data.items)
    );
  }, [type]);

  console.log(videos);

  return (
    <div className="relative flex items-center group min-h-[600px] justify-center m-10">
      <div id={`slider`} className="gap-3 grid lg:grid-cols-4 w-full">
        {videos.map((item, id) => (
          <div key={id}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && {}} */}
            {console.log(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Typevideos;
