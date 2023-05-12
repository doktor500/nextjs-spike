import MoviesCatalogue from "@/src/modules/movies/infrastructure/defaultMoviesCatalogue";

const moviesCatalogue = new MoviesCatalogue();

describe("The popular movies page", async () => {
  const movies = await moviesCatalogue.getAll();
  const movie = movies[0];

  it("is displayed successfully", () => {
    cy.visit("/");
    cy.contains(movie.title);

    cy.get("a").first().click();
    cy.contains(movie.title);
    cy.contains(movie.duration);
  });
});
