import React from "react";
import { fetchTrending } from "../api/tmdb";
import Link from "next/link";
import Image from "next/image";
import { IoIosTrendingUp } from "react-icons/io";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  release_date: string;
}

const page = async () => {
  const data = await fetchTrending();

  return (
    <div className="pl-6 pr-6 md:pl-[80px] md:pr-[80px] xl:pl-[130px] xl:pr-[130px]">
      <div className="text-red-700 md:text-lg lg:text-xl pb-5 flex flex-row items-center gap-1 underline">
        Trending this week
        <IoIosTrendingUp />
      </div>
      <div className="gap-4 flex flex-row flex-wrap">
        {(data.results || []).map((movie: Movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="relative flex flex-col rounded-lg bg-gray-800 bg-opacity-70 p-3 xl:p-4 w-40 xl:w-[230px] ">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                loading="lazy"
                className="rounded-lg"
              />
              <div className="flex flex-col flex-wrap gap-1 truncate ">
                <p className="mt-3 text-md md:text-lg text-white lg:text-xl ">
                  {movie.title}
                </p>
                <div className="flex flex-row justify-between text-gray-400 ">
                  <h3 className="text-[12px]">({movie.release_date.slice(0,4)})</h3>
                  
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
