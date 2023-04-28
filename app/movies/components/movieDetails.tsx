import Link from "next/link";
import Image from "next/image";

import Movie from "@/src/movies/domain/entities/movie";

const MovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>Release date: {movie.releaseDate.toDateString()}</h2>
      <Link href={"/"}>
        <Image src={movie.posterPath.href} alt="" width="800" height="800" />
      </Link>
    </div>
  );
};

export default MovieDetails;
