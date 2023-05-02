import MoviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";
import MovieDetails from "@/app/movies/components/movieDetails";

const moviesCatalogue = new MoviesCatalogue();

const Movies = async () => {
  const movies = await moviesCatalogue.getAll();

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
