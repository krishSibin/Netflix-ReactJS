import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import { API_KEY,imageUrl } from '../../Constants'
import YouTube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urls, setUrls] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err=>{
      console.log("Error occured")
    })



    
  }, [props.url])
  

  const setImgUrl=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data.results)
     if(response.data.results.length!==0)
     {
      setUrls(response.data.results[0].key)
     }
    }).catch(err=>{
      console.log("ERROR OCCURED")
    })

  
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  

  return (
    <div className='rowpost'>
      <h1 className='heading'>{props.title}</h1>
      <div className='rowimgs'>
     {
      movies.map((obj,index)=>{
        return(
          <img onClick={()=>setImgUrl(obj.id)} className={props.isSmall ?'rowsmallimg':'rowimg'} src={`${imageUrl+obj.poster_path}`} alt='rowimg'/>

        )
      })
     }
</div>
 { urls && <YouTube videoId={urls} opts={opts} />}
    </div>
  )
}

export default RowPost