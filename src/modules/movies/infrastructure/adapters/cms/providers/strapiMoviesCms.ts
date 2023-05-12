import MoviesCms, { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";
import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";
import { head } from "ramda";

const BASE_URL = "http://localhost:1337/api/movies";

type MovieStrapiCMSResponse = {
  id: number;
  attributes: MovieCMSResponse;
};

type MovieCMSResponse = {
  movieId: number;
  purchaseUrl: string | undefined;
};

export default class StrapiMoviesCms implements MoviesCms {
  getById(id: MovieId): Promise<MovieContent | undefined> {
    const requestInit = { headers: { Authorization: `Bearer: ${config.STRAPI_IO_API_TOKEN}` } };
    return fetch(`${BASE_URL}?locale=en&filters[movieId][$eq]=${id}`, requestInit)
      .then((response) => response.json())
      .then(({ data }: { data: MovieStrapiCMSResponse[] }) => head(data)?.attributes)
      .then((cmsMovieData) => (cmsMovieData ? mapToMovie(cmsMovieData) : undefined));
  }

  async getAll(): Promise<MovieContent[]> {
    const requestInit = { headers: { Authorization: `Bearer: ${config.STRAPI_IO_API_TOKEN}` } };
    return fetch(`${BASE_URL}?locale=en`, requestInit)
      .then((response) => response.json())
      .then(({ data }: { data: MovieStrapiCMSResponse[] }) => data.map((entry) => mapToMovie(entry.attributes)));
  }
}

const mapToMovie = (movie: MovieCMSResponse): MovieContent => {
  const purchaseUrl = movie.purchaseUrl ? new URL(movie.purchaseUrl) : undefined;
  return { id: Number(movie.movieId), purchaseUrl };
};
