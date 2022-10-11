import React, { useContext } from "react";
import { BarChart } from "recharts";
import { QuizContext } from "../Layout/Main";

const Statistics = () => {
  const quizzes = useContext(QuizContext);
  console.log(quizzes);
  return (
    <div>
      <BarChart width={700} height={500} data={quizzes}></BarChart>
    </div>
  );
};

export default Statistics;
