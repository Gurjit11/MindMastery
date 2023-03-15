import axios from "axios";

const base_url ='https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        // part: 'snippet', 
        // videoId: 'M7FIvfx5J10'
        maxResults:"12"
    },
    headers: {
      'X-RapidAPI-Key': 'ce206867e9msh6a089cdc6f9acaep14f175jsn9774304d1657',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromAPI = async (url) => {
   const {data} = await axios.get(`${base_url}/${url}`,options);
   return data
}