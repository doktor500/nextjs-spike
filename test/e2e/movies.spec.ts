import moviesCatalogue from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";

describe("The popular movies page", () => {
  it("is displayed successfully", async () => {
    const movies = await moviesCatalogue.getAll();
    const movie = movies[0];

    cy.visit("/");
    cy.contains(movie.title);
  });
});
