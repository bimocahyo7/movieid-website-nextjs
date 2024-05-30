import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MenuIcon, Play, Star, Vote } from "lucide-react";
import Image from "next/image";
import Background from "/public/bg-texture-3.jpg";

async function getMovie(id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=249bdd3341fac6015fab2994565218ba&language=en-US`
    );
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function DetailMovie({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  const urlImageMovie = "https://image.tmdb.org/t/p/original/";
  const ratingMovie = movie.vote_average.toFixed(1);

  return (
    <div className="min-h-screen max-w-full">
      <Navbar />

      <div
        className="flex gap-7 min-h-screen max-w-full bg-cover bg-black bg-opacity-80"
        style={{ backgroundImage: `url(${Background.src})` }}>
        <Image
          src={`${urlImageMovie}/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-xl ml-10 my-8 object-cover"
        />
        <div className="my-8 mr-8 ml-2">
          <h3 className="text-4xl mt-4 font-bold text-white">{movie.title}</h3>

          {/* Detail Movie */}
          <ol className="flex gap-7 mt-1 items-center text-white font-sans font-medium">
            <li>
              {movie.release_date} ({movie.origin_country})
            </li>
            <li className="flex items-center gap-1">
              <Star fill="gold" strokeWidth={0} className="size-6" />
              {ratingMovie}
            </li>
            <li className="text-white">{movie.genres.map((genre: any) => genre.name).join(", ")}</li>
            <li className="flex items-center gap-1">
              <Vote className="size-6" />
              {movie.vote_count} (vote user)
            </li>
          </ol>

          {/* Icon */}
          <div className="mt-6 flex gap-3 items-center">
            <Button className="h-11 w-11 rounded-full bg-slate-700">
              <MenuIcon fill="white" />
            </Button>

            <Button className="h-11 w-11 rounded-full bg-slate-700">
              <Heart fill="white" />
            </Button>

            <Button className="h-11 w-11 rounded-full bg-slate-700">
              <Bookmark fill="white" />
            </Button>

            <Button className="bg-orange-700 hover:bg-red-500 px-3 ml-4 transition duration-300 ease-in-out hover:scale-105">
              <Play fill="white" strokeWidth={0} />
              <span className="">Play Trailer</span>
            </Button>
          </div>

          {/* Description */}
          <div className="mt-14">
            <span className="text-slate-300 font-medium mb-6">
              <i>{movie.tagline}</i>
            </span>
            <h3 className="text-lg font-bold text-white my-1">Overview</h3>
            <p className="text-white">{movie.overview}</p>

            <h3 className="text-base font-bold text-white mt-9">Studio</h3>
            <li className="text-white">{movie.production_companies.map((company: any) => company.name).join(", ")}</li>
          </div>
        </div>
      </div>
    </div>
  );
}
