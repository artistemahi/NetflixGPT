import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase";
import Header from "./Header";
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import usePopularMovies from '../utils/usePopularMovies'
import useTopRatedMovie from '../utils/useTopRatedMovie'
import useUpcomingMovie from '../utils/useUpcomingMovie'
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();
  const SignOutClickHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };
  return (
    <div>
      <Header IsSignIn={true} signinHandler={SignOutClickHandler} />
      <div >
      <MainComponent/>
      <SecondaryComponent/>
       </div>
    </div>
  );
};
export default Browse;
