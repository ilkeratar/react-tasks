import axios from 'axios';
const searchImages=async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID 5SinxMOMT5381uEfN6ncpWjp2PKiTykzEV8DG86xfHw'
      },
      params:{
        query:term
      },
    });
    return response.data.results;
  };

  export default searchImages;