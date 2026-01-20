import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: any) => store.gptStore
  );

  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-3 sm:p-6 m-2 sm:m-4 bg-black/80 text-white rounded-lg"
>
      <div>
        {movieNames.map((movieName: string, index: number) => (
          <MovieList
            key={movieName}
            title={movieName}
            Movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
