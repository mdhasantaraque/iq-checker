import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Layout/Main";
import AllError from "./components/AllError/AllError";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Home from "./components/Home/Home";
import QuizDetails from "./components/QuizDetails/QuizDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async () => {
        return fetch("https://openapi.programming-hero.com/api/quiz");
      },
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
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
          path: "/topics/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizDetails></QuizDetails>,
        },
      ],
    },
    {
      path: "*",
      element: <AllError></AllError>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
