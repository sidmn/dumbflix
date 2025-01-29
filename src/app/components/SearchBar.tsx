"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  release_date: string;
}

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    console.log("handle Search is triggered");
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    );
    const data = await res.json();
    setSearchResults(data.results);
  };

  console.log(query);
  console.log(searchResults);

  return (
    <div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-sm bg-transparent border border-gray-500 border-1 text-white focus:border-gray-200"
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="px-4 py-2 bg-[#E50815] text-white rounded-sm"
        >
          <p className="hidden md:block">Search</p>
          <IoSearch className="md:hidden"/>
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2 absolute">
        {(searchResults || []).slice(0, 4).map((movie: Movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div
              key={movie.id}
              className="bg-gray-800 md:bg-opacity-80 text-white rounded-lg p-1 flex flex-row justify-items-center items-center gap-5 pr-5"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={40}
                height={50}
                alt="poster image"
                className="rounded-lg"
              />

              <div className="flex flex-col w-full">
                <h3 className="mt-2 text-md font-medium">{movie.title}</h3>
                <div className="flex flex-row justify-between text-gray-400 ">
                  <h3 className="text-sm">{movie.release_date}</h3>
                  <div className="flex flex-row items-center">
                    <IoHeartCircleOutline />
                    <h3 className="text-sm ">{movie.popularity}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
