import Image from "next/image";
import TrendingMovies from "./components/TrendingMovies";
import heroL from "./assets/hero_small.jpg";
import logo from "./assets/dumbflix_logo.png";
import SearchBar from "./components/SearchBar";

export default function HomePage() {

  return (
    <main>
      <div className="relative xl:h-screen h-[500px]">
        <Image
          src={heroL}
          layout="fill"
          className="absolute w-full brightness-[0.3] -z-1"
          alt="hero image"
        />
        <Image
          src={logo}
          width={200}
          alt="logo"
          className="absolute ml-5 md:ml-[80px] xl:ml-[120px] mt-5 md:w-[150px] w-[100px] xl:w-[200px]"
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
          <div className="text-white md:text-lg lg:text-xl z-1">
            Trending Now
          </div>
          <TrendingMovies />
        </div>
      </div>
    </main>
  );
}
