import DefaultMoviesRepository from "@/src/movies/infrastructure/repositories/defaultMoviesRepository";
import MovieDetails from "@/app/movies/components/movieDetails";

const moviesRepository = new DefaultMoviesRepository();

const Movies = async () => {
  const movies = await moviesRepository.getAll();

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
