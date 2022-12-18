import axios from "axios";
const API_KEY = '64874a50'

export const useSearchMovie = async (searchString,setMovie,movieShow,setMovieShow)=>{
    if(searchString !== ""){
        try {
            const res = await axios.get(`https://omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
            await setMovie(res.data) 
            setMovieShow(!movieShow)
        } catch (error) {
            console.log(error)
       
        }
     
    }
  
    
    
}
