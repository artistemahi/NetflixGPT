import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase";
import Header from "./Header";
const Browse = () => {
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
    </div>
  );
};
export default Browse;
