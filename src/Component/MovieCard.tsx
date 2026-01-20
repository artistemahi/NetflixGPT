import { CDN_API } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] cursor-pointer transition-transform duration-200 hover:scale-105">
      <img
        className="rounded-md"
        src={CDN_API + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
