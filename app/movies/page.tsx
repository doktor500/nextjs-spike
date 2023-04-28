import DefaultMoviesRepository from "@/src/movies/infrastructure/repositories/defaultMoviesRepository";

const moviesRepository = new DefaultMoviesRepository();

const Movies = async () => {
  const movies = await moviesRepository.getAll();

  return (
    <main>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.name}</p>
      ))}
    </main>
  );
};

export default Movies;
