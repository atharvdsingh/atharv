import GhostCard from "@/components/card/GhostCard";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { MovieConfig } from "@/config/Movies.config";
import React from "react";

export default function Movie() {
  return <div className="mt-10 min-h-screen ">
    <HeadingWithSubheading heading="Movies" subHeading="Movies i love to watch " />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " >

    {
        MovieConfig.map((movie,index)=>(
            <GhostCard key={index}  className="text-2xl"  subtitle={movie.releaseDate} > {movie.name} </GhostCard>
        ))
    }
  </div>
    </div>
}
