import React from "react";
import { screen } from "@testing-library/react";

import Movies from "@/app/movies/page";
import { movies } from "@/fakes/modules/movies/infrastructure/adapters/moviesClient";
import { renderAsync } from "@/fakes/testUtils";

describe("Movie page", () => {
  it("renders the list of movies", async () => {
    await renderAsync(Movies);

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
  });
});
