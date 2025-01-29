import Image from "next/image";
import { fetchMovie } from "@/app/api/tmdb";
import React from "react";
import { IoHeartCircleOutline } from "react-icons/io5";



export default async function MoviePage({
  params,
}){
  const data= await fetchMovie(params.movieId);
  return (
    <div>
      <div className="relative w-full h-screen flex flex-col justify-center content-center p-8 ">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          alt="backdrop image"
          className="-z-1 absolute brightness-[0.3] blur-md"
        />
        <div className="relative flex flex-col md:flex-row justify-items-center items-center bg-black rounded-lg p-4 md:pr-10 ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            width={400}
            height={100}
            alt="poster image"
            className="rounded-lg w-[350px]"
          />
          <div className=" flex flex-col z-1 text-white pt-5 md:pt-0 pl-8 md:pl-10 gap-2 md:gap-5">
            <div className="text-3xl md:text-[40px] xl:text-[60px] font-bold">
              {data.title}
            </div>

            <div className="flex flex-row justify-between">
            {data.release_date}
              <div className="flex flex-row items-center">                
                <IoHeartCircleOutline />
                {data.popularity}
              </div>
              
            </div>
            <div>{data.tagline} </div>

            <div>{data.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


