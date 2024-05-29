import Card from "@/components/card-movie";
import Navbar from "@/components/navbar";

async function GetListMovies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=249bdd3341fac6015fab2994565218ba&language=en-US&page=1");
    const data = await response.json();

    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function Movies() {
  const movies = await GetListMovies();
  const urlImageMovie = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="min-h-screen max-w-full">
      <Navbar />

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <Card name={movie.title} date={movie.release_date} image={`${urlImageMovie}/${movie.poster_path}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
