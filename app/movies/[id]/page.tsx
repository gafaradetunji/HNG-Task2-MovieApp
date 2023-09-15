"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import Image from "next/image";
import Genre from "@/component/Genre";
import LeftSideBar from "@/component/leftSideBar";
import CardDetails from "@/component/cardDetails";

type PageProps = {
  params: {
    id: number;
  };
};

const Movie: React.FC<PageProps> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=f8b3db37188308f327a90699247441c5`
        );
        const movieRes = await res.data;
        console.log('movies',movieRes)

        setMovie(movieRes);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [params.id]);

  return (
    <div className="flex ">
      <LeftSideBar />
      <div className="container max-w-4xl mx-auto pt-6 font-poppins">
        {isLoading ? "Loading..." : <CardDetails movie={movie} />}
      </div>
    </div>
  );
};

export default Movie
