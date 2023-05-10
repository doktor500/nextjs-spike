import React from "react";
import { screen } from "@testing-library/react";

import MovieDetail from "@/app/movies/[movie]/page";
import moviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";

import { renderAsync } from "@/test/testUtils";
import Movie from "@/src/modules/movies/domain/entities/movie";

describe("Movie Detail", () => {
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
    const movies = await moviesCatalogue.getAll();
    return moviesCatalogue.getById(movies[0].id).then((movie) => movie as Movie);
  };
});
