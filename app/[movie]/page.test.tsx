import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MovieDetail from "@/app/[movie]/page";
import { loadComponent } from "@/test/testUtils";
import { movies } from "@/fakes/movies/infrastructure/repositories/defaultMoviesRepository";

describe("Movie Detail", () => {
  it("renders a movie", async () => {
    const movie = movies[0];
    const MovieComponent = await loadComponent(MovieDetail, { params: { movie: movie.id } });
    render(<MovieComponent />);

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(`Release date: ${movie.releaseDate.toDateString()}`)).toBeInTheDocument();
    expect(screen.getByText(`Duration: ${movie.duration} minutes`)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });
});
