import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./Component/Body";
import Browse from "./Component/Browse";

const AppLayout = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/browse", element: <Browse /> },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
