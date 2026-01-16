import { createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import Body from "./Component/Body";
import Browse from "./Component/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addUser,removeUser} from "./Slices/UserSlice";


const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
     dispatch(addUser({uid:uid, email:email, name:displayName}))
     navigate("/browse")
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/")
    }
  });
}, []);
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

function App(): React.ReactElement {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
