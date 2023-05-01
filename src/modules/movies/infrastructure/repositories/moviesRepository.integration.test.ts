import DefaultMoviesRepository from "@/src/modules/movies/infrastructure/repositories/defaultMoviesRepository";
import FakeMoviesRepository, { movies } from "@/test/modules/movies/infrastructure/repositories/defaultMoviesRepository";
import MoviesRepository from "@/src/modules/movies/application/repositories/moviesRepository";

describe("Movies repository", () => {
  it.each`
    repository
    ${new DefaultMoviesRepository()}
    ${new FakeMoviesRepository()}
  `("returns a movie by id", async ({ repository }: { repository: MoviesRepository }) => {
    const movieId = movies[0].id;
    const movie = await repository.getById(movieId);

    expect(movie?.id).not.toBeNull();
    expect(movie?.title).not.toBeNull();
    expect(movie?.duration).not.toBeNull();
    expect(movie?.releaseDate).not.toBeNull();
    expect(movie?.posterPath).not.toBeNull();
  });

  it.each`
    repository
    ${new DefaultMoviesRepository()}
    ${new FakeMoviesRepository()}
  `("returns list of popular movies", async ({ repository }: { repository: MoviesRepository }) => {
    const movies = await repository.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].duration).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });
});
