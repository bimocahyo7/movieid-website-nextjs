import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, Mail, MenuIcon, Play, Star, Vote } from "lucide-react";
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
  const ratingMovie = movie.vote_average.toFixed(1);

  return (
    <div className="min-h-screen max-w-full">
      <Navbar />

      <div className="flex gap-7 min-h-screen max-w-full bg-cover bg-black bg-opacity-80" style={{}}>
        <Image
          src={`${urlImageMovie}/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-xl ml-10 my-8 object-cover"
        />
        <div className="my-8 mr-8 ml-2">
          <h3 className="text-4xl mt-4 font-bold text-white hover:text-violet-300">{movie.title}</h3>
          <li className="flex gap-7 mt-1 items-center text-white font-sans font-medium">
            <ol>
              {movie.release_date} ({movie.original_language})
            </ol>
            <ol className="flex items-center gap-1">
              <Star fill="gold" strokeWidth={0} className="size-6" />
              {ratingMovie}
            </ol>
            <ol className="flex items-center gap-1">
              <Vote className="size-6" />
              {movie.vote_count} (vote user)
            </ol>
          </li>

          {/* Icon */}
          <div className="mt-6 flex gap-3 items-center">
            <Button className="h-11 w-11 rounded-full bg-slate-800">
              <MenuIcon fill="white" />
            </Button>

            <Button className="h-11 w-11 rounded-full bg-slate-800">
              <Heart fill="white" />
            </Button>

            <Button className="h-11 w-11 rounded-full bg-slate-800">
              <Bookmark fill="white" />
            </Button>

            <Button className="bg-orange-800 hover:bg-orange-600 px-3 ml-4">
              <Play fill="white" strokeWidth={0} />
              <span className="">Play Trailer</span>
            </Button>
          </div>

          {/* Description */}
          <div className="mt-14">
            <h3 className="text-2l font-bold text-white mb-2">Overview</h3>
            <p className="text-white">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
