// import Image from "next/image";

// async function getMovie(movieId: string) {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=249bdd3341fac6015fab2994565218ba&language=en-US`
//   );
//   const data = await response.json();

//   console.log(data);
//   return data;
// }

// export default async function DetailMovie({ params }: { params: { movieId: string } }) {
//   const movie = await getMovie(params.movieId);
//   const urlImageMovie = "https://image.tmdb.org/t/p/original/";

//   return (
//     <div>
//       <h1 className="text-6xl font-bold">{movie.title}</h1>
//       <Image src={`${urlImageMovie}/${movie.poster_path}`} alt={movie.title} width={800} height={1200} />
//       <p>{movie.overview}</p>
//     </div>
//   );
// }

import Navbar from "@/components/navbar";
import { Star, Vote } from "lucide-react";
import Image from "next/image";

async function getMovie(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=249bdd3341fac6015fab2994565218ba&language=en-US`
  );
  const data = await response.json();

  console.log(data);
  return data;
}

export default async function DetailMovie({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  const urlImageMovie = "https://image.tmdb.org/t/p/original/";
  //   const coverBackgroundImage = `url(${urlImageMovie}/${movie.backdrop_path})`;

  return (
    <div className="min-h-screen max-w-full">
      <Navbar />

      <div className="flex gap-7 min-h-screen max-w-full bg-cover bg-black" style={{}}>
        <Image
          src={`${urlImageMovie}/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={500}
          className="rounded-xl ml-10 my-8"
        />
        <div className="my-8 mr-8">
          <h3 className="text-4xl font-bold text-white hover:text-violet-300">{movie.title}</h3>
          <li className="flex gap-7 mt-1 items-center text-white font-sans font-medium">
            <ol>
              {movie.release_date}({movie.original_language})
            </ol>
            <ol className="flex items-center gap-1">
              <Star fill="gold" strokeWidth={0} className="size-6" />
              {movie.vote_average}
            </ol>
            <ol className="flex items-center gap-1">
              <Vote className="size-6" />
              {movie.vote_count} (vote user)
            </ol>
          </li>

          <div className="mt-14">
            <h3 className="text-2l font-bold text-white">Overview</h3>
            <p className="text-white">{movie.overview}</p>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
