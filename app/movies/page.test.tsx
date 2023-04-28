import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import { movies } from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";
import { renderAsync } from "@/test/testUtils";

describe("Movie page", () => {
  it("renders the list of movies", async () => {
    await renderAsync(Movies);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
  });
});
