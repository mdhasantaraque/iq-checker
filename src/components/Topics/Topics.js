import React, { useContext, useState } from "react";
import { QuizContext } from "../Layout/Main";
import Quiz from "../Quiz/Quiz";

const Topics = () => {
  const quizzes = useContext(QuizContext);
  const [qData, setQData] = useState();
  console.log(qData);
  const handleToDetails = (quiz) => {
    setQData(quiz);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center py-auto p-4 dark:bg-gray-600">
      {quizzes.map((quiz) => (
        <Quiz
          key={quiz.id}
          quiz={quiz}
          handleToDetails={handleToDetails}
        ></Quiz>
      ))}
    </div>
  );
};

export default Topics;
