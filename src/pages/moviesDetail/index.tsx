// import { GetStaticProps } from 'next'
// import Link from 'next/link'

// import { User } from '../../interfaces'
// import { sampleUserData } from '../../utils/sample-data'
// import Layout from '../../components/Layout'
// import List from '../../components/List'
// import { useEffect, useState } from 'react'


// import { MovieInfo } from '../../interfaces'

// type Props = {
//   props: MovieInfo[]

  
// }


// const WithStaticProps = ({ props }: Props) => {
//   const [loading, setLoading] = useState(true)
//   const [movies, setMovies] = useState([])

//   // const getMovies = async () => {

//   //   //await를 await가 감쌀 수 있음!
//   //   // 두 번 선언할걸 한번에 해결 가능
//   //   const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json()
//   //   // const json = await res.json();
//   //   setMovies(json.data.movies)
//   //   setLoading(false)
    
//   // }

//   // useEffect(() => {
//   //   getMovies()
//   // }, [])

//   console.log(props);
  
 
//  return(  
//  <Layout title="Movies List | Next.js + TypeScript Example">
//     <h1>Movies List</h1>
//     <p>
//       Example fetching data from inside <code>getStaticProps()</code>.
//     </p>
//     <p>You are currently on: /users</p>
//     {/* <List items={items} /> */}

//     <p>
//       <Link href="/">Go home</Link>
//     </p>
//   </Layout>)
// }

// // export const getStaticProps: GetStaticProps = async () => {
// //   // Example for including static props in a Next.js function component page.
// //   // Don't forget to include the respective types for any props passed into
// //   // the component.
// //   // const items: User[] = sampleUserData
// //   const items: User[] = sampleUserData
// //   return { props: { items } }
// // }


// export async function getStaticProps() {
//   // 외부 API에서 데이터를 가져옵니다.
//   const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
//   const data = await response.json();
  
//   // `props` 키를 사용하여 페이지에 데이터를 전달합니다.
//   return {
//     props: {
//       data,
//     },
//   };
// }
// export default WithStaticProps



// const MovieAppPage = () => {
//   const [loading, setLoading] = useState(true)
//   const [movies, setMovies] = useState([])

//   const getMovies = async () => {

//     //await를 await가 감쌀 수 있음!
//     // 두 번 선언할걸 한번에 해결 가능
//     const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json()
//     // const json = await res.json();
//     setMovies(json.data.movies)
//     setLoading(false)
    
//   }
  

//   useEffect(() => {
//     getMovies()
//   }, [])
  
  
  
//   // useEffect(()=>{
//   //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
//   //   .then((res)=> res.json())
//   //   .then((json)=>{ 
//   //     // console.log(json.data.movies);
//   //     console.log(json);
      
//   //     setMovies(json.data.movies)
//   //     setLoading(false)
//   //   })
//   // },[])
//   // console.log(typeof movies);
//   // console.log(Array.isArray(movies));


  
//   return (
//   <Layout title="Movie App | Next.js + TypeScript Example">
//     <h1>Movie List</h1>
//       {loading ? 
//         <h1>loading...</h1>
//         : 
//         <div>
//           {movies.map((movie) => {
            
//             return (
//               <div key={movie.id}>
//                 <Link href="/moviesDtail/[id]" as={`/moviesDtail/${movie.id}`}>
//                   <img src={movie.medium_cover_image}></img>
//                 </Link>
//                 <h2>{movie.title}</h2>
//                 <p>{movie.summary}</p>
//                 <ul>
//                   {movie.genres.map((g)=> {
//                     return (
//                       <li key={g}>{g}</li>
//                     )
//                   })}
//                 </ul>
//               </div>
//               )})}
//         </div> 
        
//       }
      
//   </Layout>
// )
// }
// export default MovieAppPage




import Link from 'next/link'
import Layout from '../../components/Layout'
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
                <Link href="/moviesDetail/[id]" as={`/moviesDetail/${movie.id}`}>
                  <img src={movie.medium_cover_image}></img>
                </Link>
               
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
