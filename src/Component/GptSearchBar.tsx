import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/Lang";
import { useRef } from "react";
import { API_option } from "../utils/constants";
import { addGptMovieResult } from "../Slices/GptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store: any) => store.lang?.lang);
  const searchtext = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_option
    );
    const json = await data.json();
    return json.results;
  };

  const callGroq = async (query: string) => {
    const res = await fetch("https://api.groq.com/openai/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        input: query,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.output_text || data.output?.[0]?.content?.[0]?.text;
  };

  const handleGPTsearch = async () => {
    const userQuery = searchtext.current?.value;
    if (!userQuery) return;

    const gptQuery = `
Give exactly 5 movie titles related to:"${userQuery}"
Rules:
- Suggest exactly 5 movies.
- Output only movie titles.
- Use comma separation.
`;

    const aiText = await callGroq(gptQuery);
    if (!aiText) return;

    const gptMovies = aiText.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  if (!langkey || !lang?.[langkey]) return null;

  return (
    <div className="pt-[40%] sm:pt-[25%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] sm:w-[70%] md:w-1/2 m-4 p-4 sm:p-6 bg-black/80 grid grid-cols-12 rounded-md"
      >
        <input
          ref={searchtext}
          className="col-span-9 mx-2 px-3 py-2 rounded-sm text-sm sm:text-base outline-none"
          type="text"
          placeholder={lang[langkey]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTsearch}
          className="col-span-3 mx-2 py-2 text-sm sm:text-base font-bold text-white bg-red-600 rounded-sm hover:bg-red-700"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
