import DefaultMoviesRepository from "@/src/movies/infrastructure/repositories/defaultMoviesRepository";
import MovieDetails from "@/app/movies/components/movieDetails";

const moviesRepository = new DefaultMoviesRepository();

const Movies = async () => {
  const movies = await moviesRepository.getAll();

  return (
    <main>
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default Movies;
