import React from 'react'
import Image from 'next/image'
import logo from "../assets/dumbflix_logo.png";
import Link from 'next/link';


const Header = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between pl-5 md:pl-[80px] xl:pl-[120px] pt-5 pb-5 pr-5 md:pr-[80px] xl:pr-[120px]">
        <div>
          <Link href="/">
        <Image
          src={logo}
          width={200}
          alt="logo"
          
          className="md:w-[150px] w-[100px] xl:w-[200px]"
        />
           </Link> 
        </div>
        <div className="text-red-500">
            <Link href="./trending-movies">Trending</Link>
        </div>
    </div>
  )
}

export default Header