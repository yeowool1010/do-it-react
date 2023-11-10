import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

const MovieAppPage = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {

    //await를 await가 감쌀 수 있음!
    // 두 번 선언할걸 한번에 해결 가능
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json()
    // const json = await res.json();
    setMovies(json.data.movies)
    setLoading(false)
    
  }
  

  useEffect(() => {
    getMovies()
  }, [])
  
  
  
  // useEffect(()=>{
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  //   .then((res)=> res.json())
  //   .then((json)=>{ 
  //     // console.log(json.data.movies);
  //     console.log(json);
      
  //     setMovies(json.data.movies)
  //     setLoading(false)
  //   })
  // },[])
  // console.log(typeof movies);
  // console.log(Array.isArray(movies));
  
  return (
  <Layout title="Movie App | Next.js + TypeScript Example">
    <h1>Movie App</h1>
      {loading ? 
        <h1>loading...</h1>
        : 
        <div>
          {movies.map((movie) => {
            
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image}></img>
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g)=> {
                    return (
                      <li key={g}>{g}</li>
                    )
                  })}
                </ul>
              </div>
              )})}
        </div> 
        
      }
      
  </Layout>
)
}
export default MovieAppPage
