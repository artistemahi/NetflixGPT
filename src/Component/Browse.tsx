import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase";
import Header from "./Header";
import useNowPlayingMovie from '../utils/useNowPlayingMovie'
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
const Browse = () => {
  useNowPlayingMovie();
  
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
      <MainComponent></MainComponent>
      <SecondaryComponent></SecondaryComponent>
    </div>
  );
};
export default Browse;
