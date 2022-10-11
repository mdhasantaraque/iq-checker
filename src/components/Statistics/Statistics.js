import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { QuizContext } from "../Layout/Main";

const Statistics = () => {
  const quizzes = useContext(QuizContext);
  return (
    <div className="flex items-center justify-center mt-24">
      <BarChart width={400} height={400} data={quizzes}>
        <Bar dataKey="total" fill="#A78BFA" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
