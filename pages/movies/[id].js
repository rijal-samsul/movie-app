import Image from 'next/image'
import Layout from '../../components/Layout';

export default function UserDetail(props) {
    
    const { movies } = props;  
    console.log(movies);

    const pathImage = "https://image.tmdb.org/t/p/original/"

  return (
    <Layout pageTitle="Detail Movie">
        <div className="min-h-screen flex container mx-auto px-4 items-center">
            <div className="md:flex mr-5">
                <div className="mr-5 pb-5">
                    <Image className='rounded' loader={() => pathImage + movies.poster_path} src={pathImage + movies.poster_path} alt="image" width={300} height={300}  />
                </div>

                <div className="flex-1">
                    <h1 className="font-bold mb-3">{movies.title}</h1>
                    <span className="text-gray-400">{movies.release_date}</span> 
                    <ul className="flex text-slate-500">
                        {movies.genres.map((item) => (
                            <>
                                <li key={item.id} className="mr-2 ">{item.name}</li>
                            </>
                        ))}
                    </ul>

                    <h1 className="my-3 font-bold">Overview</h1>
                    <p className="text-slate-300">{movies?.overview}</p>           
                </div>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths(){
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=065ffbcf2742d39e453500abc886db7b&language=en-US&page=1")
    const movies = await res.json()
    const data =  movies.results

    const paths = data.map((movie)=> ({
        params: {
          id: `${movie.id}`,
        },
    }));

    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps(context) {

    const {id} = context.params
    // console.log(id);

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=065ffbcf2742d39e453500abc886db7b&language=en-US`)
    const movies = await res.json() 

    return {
      props: { movies },
    }
}