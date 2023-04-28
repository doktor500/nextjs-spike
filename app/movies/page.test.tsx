import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import { movies } from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";
import { loadComponent } from "@/test/testUtils";

describe("Movie page", () => {
  it("renders the list of movies", async () => {
    const MoviesComponent = await loadComponent(Movies);
    render(<MoviesComponent />);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
  });
});
