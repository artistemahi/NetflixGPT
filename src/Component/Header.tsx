import { NetflixLogo,NetflixUserbg } from "../utils/constants";
import LanguageSelector from "./LanguageSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { addUser, removeUser } from "../Slices/UserSlice";
import { auth } from "../utils/firebase";

const Header = ({ IsSignIn, signinHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // IMPORTANT LINE
        await user.reload();

        const { uid, email, displayName } = auth.currentUser;

        dispatch(
          addUser({
            uid,
            email,
            name: displayName,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-8 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <Link to="/">
        <img
          className="w-44 cursor-pointer"
          src={NetflixLogo}
          alt="netflix-logo"
        />
      </Link>
      {/* Right: Language selector + Sign Out */}
      {!IsSignIn ? (
        <div className="flex items-center gap-4">
          <LanguageSelector />

          <button
            onClick={signinHandler}
            className="rounded-md bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </div>
      ): (// here operate from the browse page  
        <div className="flex items-center gap-4">
          <img src={NetflixUserbg} alt = "netflixUserBg"/>
          <button
            onClick={signinHandler}
            className="rounded-md bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
