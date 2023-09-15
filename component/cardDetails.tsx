import Image from "next/image";
import { LuDot } from "react-icons/lu";
import Genre from "./Genre";
type MovieCardDetailsProps = {
  movie?: Movie;
};

const CardDetails: React.FC<MovieCardDetailsProps> = ({ movie }) => {
  return (
    <div className="px-3 flex flex-col gap-3 h-full ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        width={700}
        height={800}
        priority
        className="rounded-2xl h-[400px] w-full"
        alt={(movie?.title as string) || ""}
      />
      <div className=" px-3 py-4">
        <div className=" lg:flex items-center font-bold text-base text-[18px] leading-[34px] lg:space-x-2 ">
          <h1 className="font-bold " data-testid="movie-title">
            {movie?.title}
          </h1>
          <div className="hidden lg:block">
            <LuDot />
          </div>
          <p className="font-bold" data-testid="movie-release-date">
            {movie?.release_date}
          </p>
          <div className="hidden lg:block">
            <LuDot />
          </div>
          <p data-testid="movie-runtime">{movie?.runtime}</p>
          <div className="lg:px-3 flex gap-2">
            {movie?.genres.map((genre, index) => (
              <Genre genre={genre} key={index} />
            ))}
          </div>
        </div>
        <p className=" text-xl mt-4" data-testid="movie-overview">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};
export default CardDetails;
