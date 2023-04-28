import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Movies from "@/app/movies/page";
import React from "react";

describe("Movie page", () => {
  it("displays list of movies", async () => {
    const MoviesComponent = await renderAsync(Movies);
    render(<MoviesComponent />);
    expect(screen.getByText("Cocaine Bear")).toBeInTheDocument();
  });
});

const renderAsync = async (
  Component: (props: {}) => Promise<JSX.Element>,
  props = {}
) => {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
};
