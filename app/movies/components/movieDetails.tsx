import Link from "next/link";
import Image from "next/image";

import Movie from "@/src/modules/movies/domain/entities/movie";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <Link href={`/movies/${movie.id}`}>
        <Image src={movie.posterPath} alt={movie.title} width="600" height="600" priority />
      </Link>
    </div>
  );
};

export default MovieDetails;
