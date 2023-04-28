import ExternalMoviesRepository from "@/app/movies/repositories/externalMoviesRepository";

const Movies = async () => {
  const moviesRepository = new ExternalMoviesRepository();
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
