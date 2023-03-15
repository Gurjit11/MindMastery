import axios from "axios";

const base_url ='https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        // part: 'snippet', 
        // videoId: 'M7FIvfx5J10'
        maxResults:"12"
    },
    headers: {
      'X-RapidAPI-Key': your key here ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromAPI = async (url) => {
   const {data} = await axios.get(`${base_url}/${url}`,options);
   return data
}
