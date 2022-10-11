import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizPage from "../QuizPage/QuizPage";

const QuizDetails = () => {
  const getQuiz = useLoaderData();
  // console.log(getQuiz.data.questions);
  const quizDetails = getQuiz.data.questions;
  return (
    <div>
      {quizDetails.map((quiz) => (
        <QuizPage key={quiz.id} quiz={quiz}></QuizPage>
      ))}
    </div>
  );
};

export default QuizDetails;
