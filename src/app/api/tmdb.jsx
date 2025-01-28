const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

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

export async function fetchMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );

  if (!res.ok) {
    throw (
      (new Error("Failed to fecth Movie details!"),
      { next: { revalidate: 3600 } })
    );
  }

  return res.json();
}
