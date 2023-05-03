import React from "react";
import { screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import moviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";

import { renderAsync } from "@/test/testUtils";

describe("Movie page", () => {
  it("renders the list of movies", async () => {
    const movies = await moviesCatalogue.getAll();
    await renderAsync(Movies);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
  });
});
