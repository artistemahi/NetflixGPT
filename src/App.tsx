import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Component/Body";
import Browse from "./Component/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"

const AppLayout=()=>{
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  )
}

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
     <RouterProvider router ={appRoute} />
    </div>
  );
}

export default App;
