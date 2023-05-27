import Image from "next/image";
import Link from "next/link";

import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import MoviesCatalogue from "@/src/modules/movies/infrastructure/defaultMoviesCatalogue";
import DefaultFeatureFlagService from "@/src/modules/shared/infrastructure/defaultFeatureFlagService";
import { FeatureFlag } from "@/src/modules/shared/application/featureFlagService";

export const revalidate = 1;

const moviesCatalogue = new MoviesCatalogue();
const featureFlagService = new DefaultFeatureFlagService();

const MovieDetail = async ({ params }: { params: { movie: MovieId } }) => {
  const movie = await moviesCatalogue.getById(Number(params.movie));
  const durationFeatureFlagEnabled = await featureFlagService.getFeatureFlag(FeatureFlag.DURATION);
  if (!movie) return;

  return (
    <div className="grid place-items-center">
      <div className="w-96">
        <h2 className="text-2xl">{movie.title}</h2>
        <h2 className="text-lg">Release date: {movie.releaseDate.toDateString()}</h2>
        {durationFeatureFlagEnabled && <h2>Duration: {movie.duration} minutes</h2>}
      </div>
      <Image className="my-12 w-96" src={movie.posterPath.href} alt={movie.title} width="400" height="400" />
      <p className="w-96">{movie.overview}</p>
      {movie.purchaseUrl && (
        <Link href={movie.purchaseUrl.href}>
          <Image
            className="my-12 w-32"
            src={"/images/prime-video.png"}
            alt={`buy ${movie.title}`}
            width="400"
            height="400"
          />
        </Link>
      )}
    </div>
  );
};

export default MovieDetail;
