import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

export const QuizContext = createContext([]);
const Main = () => {
  const allQuiz = useLoaderData();
  const quizzes = allQuiz.data;

  return (
    <QuizContext.Provider value={quizzes}>
      <Header></Header>
      <Outlet></Outlet>
    </QuizContext.Provider>
  );
};

export default Main;
