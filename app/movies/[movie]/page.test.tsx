import React from "react";
import { screen } from "@testing-library/react";

import MovieDetail from "@/app/movies/[movie]/page";
import { renderAsync } from "@/test/testUtils";
import { movies } from "@/test/modules/movies/infrastructure/adapters/moviesClient";

describe("Movie Detail", () => {
  it("renders a movie", async () => {
    const movie = movies[0];
    await renderAsync(MovieDetail, { params: { movie: movie.id } });

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(`Release date: ${movie.releaseDate.toDateString()}`)).toBeInTheDocument();
    expect(screen.getByText(`Duration: ${movie.duration} minutes`)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });
});
