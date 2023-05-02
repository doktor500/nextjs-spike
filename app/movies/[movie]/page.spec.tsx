import React from "react";
import { screen } from "@testing-library/react";

import MovieDetail from "@/app/movies/[movie]/page";
import MoviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";

import { renderAsync } from "@/test/testUtils";

describe("Movie Detail", () => {
  const moviesCatalogue = new MoviesCatalogue();

  it("renders a movie", async () => {
    const movies = await moviesCatalogue.getAll();
    const movie = movies[0];

    await renderAsync(MovieDetail, { params: { movie: movie.id } });

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(`Release date: ${movie.releaseDate.toDateString()}`)).toBeInTheDocument();
    expect(screen.getByText(`Duration: ${movie.duration} minutes`)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });
});
