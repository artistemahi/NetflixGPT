import { NetflixLogo } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NetflixUserbg } from "../utils/constants";
import {useSelector} from "react-redux"
const BrowseHeader = () => {
  const navigate = useNavigate();
const user = useSelector((store: any) => store.user);
console.log(user);
  const SignOutClickHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-8 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            className="w-44 cursor-pointer"
            src={NetflixLogo}
            alt="netflix-logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <img className="" src={NetflixUserbg} alt="netflixuseBG" />

          <button 
            onClick={SignOutClickHandler}
            className="rounded-md bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
};
export default BrowseHeader;
