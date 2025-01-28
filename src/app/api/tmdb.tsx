const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
  tagline: string;
  overview: string;
}

export async function fetchTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
    { next: { revalidate: 3600 } } // Currently I have Cached it for 1 hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
}

export async function fetchMovie(movieId: string): Promise<Movie> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    { next: { revalidate: 3600 } } 
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Movie details!");
  }

  return res.json();
}