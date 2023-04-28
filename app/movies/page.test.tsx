import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import { movies } from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";

describe("Movie page", () => {
  it("displays list of movies", async () => {
    const MoviesComponent = await renderAsync(Movies);
    render(<MoviesComponent />);

    expect(screen.getByText(movies[0].name)).toBeInTheDocument();
  });
});

const renderAsync = async (
  Component: (props: {}) => Promise<JSX.Element>,
  props = {}
) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
