import React from "react";
import { screen } from "@testing-library/react";

import { renderAsync } from "@/test/testUtils";

import Movies from "@/app/movies/page";
import MoviesCatalogue from "@/src/modules/movies/infrastructure/defaultMoviesCatalogue";

describe("Movie page", () => {
  const moviesCatalogue = new MoviesCatalogue();

  it("renders the list of movies", async () => {
    const movies = await moviesCatalogue.getAll();
    await renderAsync(Movies);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
  });
});
