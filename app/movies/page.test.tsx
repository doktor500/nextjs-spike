import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import { movies } from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";

describe("Movie page", () => {
  it("displays the list of movies", async () => {
    const MoviesComponent = await loadComponent(Movies);
    render(<MoviesComponent />);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
    expect(screen.getByText(`Release date: ${movies[0].releaseDate.toDateString()}`)).toBeInTheDocument();
  });
});

const loadComponent = async (Component: (props: {}) => Promise<JSX.Element>, props = {}) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
