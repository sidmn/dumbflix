import Image from "next/image";
import { fetchMovie } from "@/app/api/tmdb";
import React from "react";
import { IoHeartCircleOutline } from "react-icons/io5";

export default async function MoviePage({ params }) {
  const data = await fetchMovie(params.movieId);
  return (
    <div className="p-5">
      <div className="relative md:h-screen w-full flex flex-col justify-center content-center md:p-8 ">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          alt="backdrop image"
          className="brightness-[0.3] blur-md"
        />
        <div className="relative flex flex-col md:flex-row justify-items-center items-center bg-black rounded-lg p-5 md:pr-10 ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            width={400}
            height={100}
            alt="poster image"
            className="rounded-lg w-[350px]"
          />
          <div className=" flex flex-col z-1 text-white pt-5 md:pt-0  md:pl-10 gap-2 md:gap-5">
            <div className="text-3xl md:text-[40px] xl:text-[60px] font-bold">
              {data.title}
            </div>

            <div className="flex flex-row justify-between text-gray-400 text-sm">
              {data.release_date}
              <div className="flex flex-row items-center">
                <IoHeartCircleOutline />
                {data.popularity}
              </div>
            </div>
            <div className="text-lg">{data.tagline} </div>

            <div className="text-gray-400">{data.overview}</div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src={`https://www.2embed.cc/embed/${params.movieId}`}
          allowFullScreen
          className="w-full h-[400px] p-5 pt-20 pb-10 md:pt-0 sm:h-[500px] md:h-[600px] xl:h-[950px] xl:p-20"
        ></iframe>
      </div>
    </div>
  );
}
