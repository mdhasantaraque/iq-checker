import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizPage from "../QuizPage/QuizPage";

const QuizDetails = () => {
  const getQuiz = useLoaderData();
  // console.log(getQuiz);
  const quizDetails = getQuiz.data.questions;
  return (
    <div>
      <div className="text-center p-10">
        <p className="dark:text-violet-600 text-5xl font-bold">
          {getQuiz.data.name}
        </p>
        <p className="dark:text-gray-600 text-2xl font-bold">
          total question: {getQuiz.data.total}
        </p>
      </div>
      {quizDetails.map((quiz) => (
        <QuizPage key={quiz.id} quiz={quiz}></QuizPage>
      ))}
    </div>
  );
};

export default QuizDetails;
