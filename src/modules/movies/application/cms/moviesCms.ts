import { MovieId } from "@/src/modules/movies/domain/entities/movie";

export type MovieContent = {
  id: MovieId;
  purchaseUrl: URL | undefined;
};

export default interface MoviesCms {
  getById(id: MovieId): Promise<MovieContent | undefined>;
  getAll(): Promise<MovieContent[]>;
}
