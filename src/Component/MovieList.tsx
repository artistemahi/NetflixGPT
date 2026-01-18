import MovieCard from ".//MovieCard"

const MovieList = ({ title, Movies }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="mb-3 text-xl font-bold text-white">
        {title}
      </h1>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {Movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
