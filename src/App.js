import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/topics",
      element: <Topics></Topics>,
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
    {
      path: "/header",
      element: <Header></Header>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
