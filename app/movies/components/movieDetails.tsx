import Link from "next/link";
import Image from "next/image";

import Movie from "@/src/movies/domain/entities/movie";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <Link href={`/${movie.id}`}>
        <Image src={movie.posterPath.href} alt={movie.title} width="600" height="600" priority />
      </Link>
    </div>
  );
};

export default MovieDetails;
