// import { GetStaticProps, GetStaticPaths } from 'next'

// import { User, MovieInfo } from '../../interfaces'
// import { sampleUserData } from '../../utils/sample-data'
// import Layout from '../../components/Layout'
// import ListDetail from '../../components/ListDetail'

// import Link from 'next/link'


// type Props = {
//   item?: MovieInfo
//   // errors?: string
// }

// const StaticPropsDetail = ( {item} : Props ) => {
//   // if (errors) {
//   //   return (
//   //     <Layout title="Error | Next.js + TypeScript Example">
//   //       <p>
//   //         <span style={{ color: 'red' }}>Error:</span> {errors}
//   //       </p>
//   //     </Layout>
//   //   )
//   // }

//   return (
//     <Layout
//       title={`${
//         item ? item.title : 'Movie Detail'
//       } | Next.js + TypeScript Example`}
//     >
//       {/* {item && <ListDetail item={item} />} */}
//       {item && 
//         <div>
//           <h1> {item.title}</h1>
//           <div> {item.url}</div>
//           <p> {item.title_long}</p>
//           <ul>
//                   {item.genres.map((g)=> {
//                     return (
//                       <li key={g}>{g}</li>
//                     )
//                   })}
//                 </ul>
//         </div>
//       }
//     </Layout>
//   )
// }

// export default StaticPropsDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   // 사용자를 기준으로 사전 렌더링할 경로 가져오기
//   const paths = sampleUserData.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   // 빌드 시 이 경로만 미리 렌더링합니다.
//   // { fallback: false }은(는) 다른 경로는 404개여야 함을 의미합니다.
//   return { paths, fallback: false }
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// // 이 함수는 서버측 빌드 시 호출됩니다.
// // 클라이언트 쪽에서 호출되지 않을 것이기 때문에 당신도 할 수 있다
// // 데이터베이스 쿼리를 직접 수행합니다.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id
//     const item = sampleUserData.find((data) => data.id === Number(id))
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     // {propips: 항목 }을(를) 반환하여 StaticPropsDetail 구성 요소
//     // 빌드 시 '아이 템'을 소품으로 제공받게 된다
//     return { props: { item } }
//   } catch (err: any) {
//     return { props: { errors: err.message } }
//   }
// }


import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image} alt={movie.title} />
      <p>{movie.description_full}</p>
      {/* ... 추가적인 영화 정보 */}
    </div>
  );
};

export default MovieDetail;