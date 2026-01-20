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
      API_option,
    );
    const json = await data.json();
    return json.results;
  };

  //Hugging Groq call
  const callGroq = async (query: string) => {
    const res = await fetch("https://api.groq.com/openai/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", // ✅ Groq-supported model
        input: query,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Groq Error:", err);
      return null;
    }

    const data = await res.json();

    // Groq response text extract
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
- No additional text or formatting.
- Prioritize IMDb 8+ or trending movies.
- If query is vague, suggest a diverse mix.

`;
    const aiText = await callGroq(gptQuery);
    if (!aiText) return;
    //  console.log(aiText);
    const gptMovies = aiText.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  if (!langkey || !lang?.[langkey]) return null;

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="m-6 p-6 bg-black grid grid-cols-12 rounded-md"
      >
        <input
          ref={searchtext}
          className="mx-4 px-4 rounded-sm col-span-9"
          type="text"
          placeholder={lang[langkey]?.gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTsearch}
          className="mx-4 px-4 font-bold text-lg py-1 text-white bg-red-600 rounded-sm col-span-3"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
