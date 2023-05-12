import { MovieDTO } from "@/src/modules/movies/application/repositories/moviesRepository";

export const movieData: MovieDTO[] = [
  {
    id: 603,
    title: "The Matrix",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    duration: 136,
    releaseDate: new Date("1999-03-30T00:00:00.000Z"),
    posterPath: new URL("https://www.themoviedb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
  },
];
