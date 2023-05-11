import React from "react";
import { screen } from "@testing-library/react";

import { renderAsync } from "@/test/testUtils";

import MovieDetail from "@/app/movies/[movie]/page";
import MoviesCatalogue from "@/src/modules/movies/infrastructure/defaultMoviesCatalogue";
import Movie from "@/src/modules/movies/domain/entities/movie";

describe("Movie Detail", () => {
  const moviesCatalogue = new MoviesCatalogue();

  it("renders a movie", async () => {
    const movie = await getMovie();

    await renderAsync(MovieDetail, { params: { movie: movie.id } });

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(`Release date: ${movie.releaseDate.toDateString()}`)).toBeInTheDocument();
    expect(screen.getByText(`Duration: ${movie.duration} minutes`)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });

  it("renders a button to purchase the movie if the purchase URL is present", async () => {
    const movie = await getMovie();

    await renderAsync(MovieDetail, { params: { movie: movie.id } });

    expect(screen.getByRole("link")).toHaveAttribute("href", movie.purchaseUrl?.href);
  });

  const getMovie = async (): Promise<Movie> => {
    const matrixMovieId = 603;
    return moviesCatalogue.getById(matrixMovieId).then((movie) => movie as Movie);
  };
});
