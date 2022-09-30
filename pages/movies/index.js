import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import Layout from '../../components/Layout';

export default function Home(props) {

  const {data} = props
  const router = useRouter();  
  // console.log(data);

  const pathImage = "https://image.tmdb.org/t/p/original/"

  return (
    <Layout pageTitle="Movies App">
      <div>
        <div className="container mx-auto my-5">
          <h1 className='font-bold'>List Movie</h1>
        </div>

        <div className='container mx-auto justify-center md:justify-start flex flex-wrap'>
          {data.map((item) => (
            <div key={item.id} onClick={() => router.push(`/movies/${item.id}`)}>
              <div className='mr-5 md:w-48 mb-5 shadow cursor-pointer hover:scale-110 delay-300 duration-300'>
                <div>
                  <Image className='rounded' loader={() => pathImage + item.backdrop_path} src={pathImage + item.backdrop_path} alt="image" width="300" height="300"/>
                </div>
                
                <div>
                    <div className='flex justify-between mt-2'>
                      <h2 className='mb-2 font-semibold'>{item.title}</h2>
                      <span className='text-xs text-slate-400'>{item.vote_average}/10 IMDb</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=065ffbcf2742d39e453500abc886db7b&language=en-US&page=1")
  const movies = await res.json()
  const data =  movies.results
  // console.log(data);

  return{
    props: {
      data,
    }
  }
}