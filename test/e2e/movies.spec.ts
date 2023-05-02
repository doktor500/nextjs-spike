import MoviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";

describe("The popular movies page", () => {
  const moviesCatalogue = new MoviesCatalogue();

  it("is displayed successfully", async () => {
    const movies = await moviesCatalogue.getAll();
    const movie = movies[0];

    cy.visit("/");
    cy.contains(movie.title);
  });
});
