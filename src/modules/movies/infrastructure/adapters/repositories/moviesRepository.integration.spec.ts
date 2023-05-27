import HttpMoviesRepository from "@/src/modules/movies/infrastructure/adapters/repositories/defaultMoviesRepository";
import FakeMoviesRepository from "@/fakes/modules/movies/infrastructure/adapters/repositories/defaultMoviesRepository";
import MoviesRepository from "@/src/modules/movies/application/repositories/moviesRepository";

describe("Movies repository", () => {
  it.each`
    moviesRepository
    ${new HttpMoviesRepository()}
    ${new FakeMoviesRepository()}
  `("returns list of popular movies", async ({ moviesRepository }: { moviesRepository: MoviesRepository }) => {
    const movies = await moviesRepository.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].overview).not.toBeNull();
    expect(movies[0].duration).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });

  it.each`
    moviesRepository
    ${new HttpMoviesRepository()}
    ${new FakeMoviesRepository()}
  `("returns a movie by id", async ({ moviesRepository }: { moviesRepository: MoviesRepository }) => {
    const matrixMovieId = 603;
    const movie = await moviesRepository.getById(matrixMovieId);

    expect(movie?.id).toEqual(matrixMovieId);
    expect(movie?.title).toEqual("The Matrix");
    expect(movie?.overview).toEqual(
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
    );
    expect(movie?.duration).toEqual(136);
    expect(movie?.releaseDate).toEqual(new Date("1999-03-30T00:00:00.000Z"));
    expect(movie?.posterPath).toEqual("https://www.themoviedb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg");
  });
});
