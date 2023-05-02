import { movies } from "@/src/modules/movies/infrastructure/adapters/moviesClient";

describe("The popular movies page", () => {
  it("is displayed successfully", () => {
    const movie = movies[0];

    cy.visit("/");
    cy.contains(movie.title);
  });
});
