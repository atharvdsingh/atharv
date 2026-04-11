import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import GhostCard from "@/components/card/GhostCard";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { MovieConfig } from "@/config/Movies.config";

export default function Movie() {
  return (
    <div className="mt-10 min-h-screen ">
      <HeadingWithSubheading
        heading="Movies"
        subHeading="Movies i love to watch "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {MovieConfig.map((movie, index) => (
          <StaggerComponentForList key={index} idx={index}>
            <GhostCard
              key={index}
              className="text-2xl"
              subtitle={movie.releaseDate}
            >
              {" "}
              {movie.name}{" "}
            </GhostCard>
          </StaggerComponentForList>
        ))}
      </div>
    </div>
  );
}
