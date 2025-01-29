import Image from "next/image";
import TrendingMovies from "./components/TrendingMovies";
import heroL from "./assets/hero_small.jpg";
import SearchBar from "./components/SearchBar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-screen">
      <div className="relative xl:h-screen h-[500px]">
        <Image
          src={heroL}
          layout="fill"
          className="absolute w-full brightness-[0.3] -z-1"
          alt="hero image"
        />

        <div className="absolute z-1 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
        <div className="relative w-full h-full flex flex-col z-10 justify-center items-center">
          <div className="pl-[10vw] pr-[10vw] md:pl-[20vw] md:pr-[20vw] xl:pl-[30vw] xl:pr-[30vw] text-white text-3xl md:text-[40px] xl:text-[60px] xl:leading-[60px] font-bold text-center ">
            Find Movies, with details and reviews
          </div>
          <div className="text-white mt-10">
            Ready to watch something? Search here
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="p-8">
        <div className="pl-4 pr-4 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20">
          <div className="text-white md:text-lg lg:text-xl z-1 pb-2 flex flex-row justify-between ">
            Trending Now
            <Link
                href="/trending-movies"
                className="items-center"
                aria-label="View More trending movies"
              >
            <button className="bg-red-600 px-3 py-2 rounded-lg" aria-label="View More">
              
                <p className="hidden md:block text-sm">View More</p> <IoIosArrowForward className="md:hidden" />
              
            </button></Link>
          </div>
          <TrendingMovies />
        </div>
      </div>
    </main>
  );
}
