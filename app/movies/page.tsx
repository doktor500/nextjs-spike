import HTTPMoviesClient from "@/src/modules/movies/infrastructure/adapters/moviesClient";
import MovieDetails from "@/app/movies/components/movieDetails";

const moviesClient = new HTTPMoviesClient();

const Movies = async () => {
  const movies = await moviesClient.getAll();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.map((movie) => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
