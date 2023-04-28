import DefaultMoviesRepository from "@/src/movies/infrastructure/repositories/defaultMoviesRepository";
import FakeMoviesRepository from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";
import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";

describe("Movies repository", () => {
  it.each`
    repository
    ${new DefaultMoviesRepository()}
    ${new FakeMoviesRepository()}
  `("returns list of popular movies", async ({ repository }: { repository: MoviesRepository }) => {
    const movies = await repository.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });
});
