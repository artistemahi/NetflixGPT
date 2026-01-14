import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Component/Body";
import Browse from "./Component/Browse";

function App(): React.ReactElement {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
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
