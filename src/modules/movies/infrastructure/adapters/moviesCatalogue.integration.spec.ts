import httpMoviesClient from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";
import fakeMoviesClient from "@/fakes/modules/movies/infrastructure/adapters/moviesCatalogue";
import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";

describe("Movies catalogue", () => {
  it.each`
    moviesCatalogue
    ${httpMoviesClient}
    ${fakeMoviesClient}
  `("returns list of popular movies", async ({ moviesCatalogue }: { moviesCatalogue: MoviesCatalogue }) => {
    const movies = await moviesCatalogue.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].overview).not.toBeNull();
    expect(movies[0].duration).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });

  it.each`
    moviesCatalogue
    ${httpMoviesClient}
    ${fakeMoviesClient}
  `("returns a movie by id", async ({ moviesCatalogue }: { moviesCatalogue: MoviesCatalogue }) => {
    const matrixMovieId = 603;
    const movie = await moviesCatalogue.getById(matrixMovieId);

    expect(movie?.id).toEqual(matrixMovieId);
    expect(movie?.title).toEqual("The Matrix");
    expect(movie?.overview).toEqual(
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
    );
    expect(movie?.duration).toEqual(136);
    expect(movie?.releaseDate).toEqual(new Date("1999-03-30T00:00:00.000Z"));
    expect(movie?.posterPath).toEqual(new URL("https://www.themoviedb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"));
    expect(movie?.purchaseUrl).toEqual(new URL("https://www.primevideo.com/detail/Matrix/0LTTL5BTBJ6UCCYMPS6AI46169"));
  });
});
