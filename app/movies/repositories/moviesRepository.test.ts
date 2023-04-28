import ExternalMoviesRepository from "@/app/movies/repositories/externalMoviesRepository";
import FakeMoviesRepository from "@/app/movies/repositories/fakeMoviesRepository";
import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";

describe('Movies repository', () => {
    it.each`
        repository
        ${new ExternalMoviesRepository()} 
        ${new FakeMoviesRepository()} 
    `("returns list of popular movies", async ({ repository }: { repository: MoviesRepository }) => {
        const movies = await repository.getAll();

        expect(movies).not.toHaveLength(0);
        expect(movies[0].id).not.toBeNull();
        expect(movies[0].name).not.toBeNull();
    })
});