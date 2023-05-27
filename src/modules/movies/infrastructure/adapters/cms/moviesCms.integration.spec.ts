import ContentfulMoviesCms from "@/src/modules/movies/infrastructure/adapters/cms/providers/contentfulMoviesCms";
import SanityMoviesCms from "@/src/modules/movies/infrastructure/adapters/cms/providers/sanityMoviesCms";
import StrapiMoviesCms from "@/src/modules/movies/infrastructure/adapters/cms/providers/strapiMoviesCms";
import FakeMoviesCms from "@/fakes/modules/movies/infrastructure/adapters/cms/defaultMoviesCms";
import MoviesCms from "@/src/modules/movies/application/cms/moviesCms";

describe("Movies cms", () => {
  it.each`
    moviesCms
    ${new ContentfulMoviesCms()}
    ${new SanityMoviesCms()}
    ${new StrapiMoviesCms()}
    ${new FakeMoviesCms()}
  `("returns list of movies with a purchase url", async ({ moviesCms }: { moviesCms: MoviesCms }) => {
    const movies = await moviesCms.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].purchaseUrl).not.toBeNull();
  });

  it.each`
    moviesCms
    ${new ContentfulMoviesCms()}
    ${new SanityMoviesCms()}
    ${new StrapiMoviesCms()}
    ${new FakeMoviesCms()}
  `("returns a movie by id with a purchase url", async ({ moviesCms }: { moviesCms: MoviesCms }) => {
    const matrixMovieId = 603;
    const movie = await moviesCms.getById(matrixMovieId);

    expect(movie?.id).toEqual(matrixMovieId);
    expect(movie?.purchaseUrl).toEqual("https://www.primevideo.com/detail/Matrix/0LTTL5BTBJ6UCCYMPS6AI46169");
  });
});
