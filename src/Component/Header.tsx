import {
  NetflixLogo,
  NetflixUserbg,
  SupportedLanguages,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { addUser, removeUser } from "../Slices/UserSlice";
import { togglerGptSearchView } from "../Slices/GptSlice";
import { auth } from "../utils/firebase";
import { changeLanguage } from "../Slices/configSlice";

const Header = ({ signinHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);
  const isLoggedIn = !!user;

  const [IsGPT, setIsGPT] = useState(false);

  const languageClickHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const GptClickHandler = () => {
    dispatch(togglerGptSearchView());
    setIsGPT(!IsGPT);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        const { uid, email, displayName } = auth.currentUser;

        dispatch(addUser({ uid, email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
      <Link to="/">
        <img
          className="w-24 sm:w-36 cursor-pointer py-1"
          src={NetflixLogo}
          alt="netflix-logo"
        />
      </Link>

      {!isLoggedIn ? (
        <div className="flex items-center gap-4">
          <button
            onClick={signinHandler}
            className="rounded-md text-sm sm:text-base w-20 sm:w-32 bg-red-600 py-1.5 sm:py-2 text-white font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-4">
          {IsGPT && (
            <select
              onChange={languageClickHandler}
              className="p-1 rounded text-sm"
            >
              {SupportedLanguages.map((index) => (
                <option key={index.identifier} value={index.identifier}>
                  {index.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={GptClickHandler}
            className="bg-green-600 py-1.5 px-3 rounded-md text-sm sm:text-base text-white font-bold"
          >
            {IsGPT ? "Home" : "GPT Search"}
          </button>

          <img
            src={NetflixUserbg}
            alt="netflixUserBg"
            className="w-8 h-8 rounded-full"
          />

          <button
            onClick={signinHandler}
            className="rounded-md bg-red-600 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
