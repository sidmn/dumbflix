
import React from "react";
import { fetchTrending } from "../api/tmdb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id:number;
  title:string;
  poster_path:string;
  popularity:number;
  release_date:string
}

const TrendingMovies = async () => {
  const data = await fetchTrending();

  return (
    <div>
      <div className="">Trending this week</div>
      <Carousel>
        <CarouselContent className="md:p-2">
          {(data.results || []).slice(0,10).map((movie: Movie, index:number) => (
            <CarouselItem className="basis-1/4 md:basis-1/5 lg:basis-1/6" key={index}>
              <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div className="relative z-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
                <p className="absolute z-1 text-[50px] md:text-[80px] bottom-[-10] left-[-10] text-black text-stroke-2 text-stroke-white font-bold md:left-[-12px] md:bottom[-20] lg:text-[100px]">
                  {index + 1}
                </p>
              </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TrendingMovies;
