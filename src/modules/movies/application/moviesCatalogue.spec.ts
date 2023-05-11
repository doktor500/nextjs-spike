import { mock } from "jest-mock-extended";

import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";
import MoviesRepository from "@/src/modules/movies/application/repositories/moviesRepository";
import MoviesCms from "@/src/modules/movies/application/cms/moviesCms";
import { movieData } from "@/test/data/movies/dtos/movies";
import { movieContent } from "@/test/data/movies/content/movies";

describe("The movies catalogue", () => {
  const moviesRepository = mock<MoviesRepository>();
  const moviesCms = mock<MoviesCms>();
  const moviesCatalogue = new MoviesCatalogue({ moviesRepository, moviesCms });

  it("returns list of popular movies", async () => {
    moviesRepository.getAll.mockResolvedValue(movieData);
    moviesCms.getAll.mockResolvedValue(movieContent);

    const movies = await moviesCatalogue.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).toEqual(movieData[0].id);
    expect(movies[0].title).toEqual(movieData[0].title);
    expect(movies[0].overview).toEqual(movieData[0].overview);
    expect(movies[0].duration).toEqual(movieData[0].duration);
    expect(movies[0].releaseDate).toEqual(movieData[0].releaseDate);
    expect(movies[0].posterPath).toEqual(movieData[0].posterPath);
    expect(movies[0].purchaseUrl).toEqual(movieContent[0].purchaseUrl);
  });

  it("returns a movie by id", async () => {
    moviesRepository.getById.mockResolvedValue(movieData[0]);
    moviesCms.getById.mockResolvedValue(movieContent[0]);

    const movie = await moviesCatalogue.getById(movieData[0].id);

    expect(movie?.id).toEqual(movieData[0].id);
    expect(movie?.title).toEqual(movieData[0].title);
    expect(movie?.overview).toEqual(movieData[0].overview);
    expect(movie?.duration).toEqual(movieData[0].duration);
    expect(movie?.releaseDate).toEqual(movieData[0].releaseDate);
    expect(movie?.posterPath).toEqual(movieData[0].posterPath);
    expect(movie?.purchaseUrl).toEqual(movieContent[0].purchaseUrl);
  });
});
