import React from "react";
import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizPage = ({ quiz }) => {
  const { options, question, id, correctAnswer } = quiz;
  const restQuestion = question.slice(3, -4);

  return (
    <div className="max-w-lg mx-auto my-10  items-center p-6 dark:text-gray-100 rounded-lg border dark:bg-gray-700 border-gray-200 dark:border-gray-700">
      <fieldset className="mb-5">
        <legend className="sr-only">{id}</legend>
        <div className="flex justify-between">
          <div className="mb-6">{restQuestion}</div>
          <button>
            <EyeIcon
              onClick={() =>
                toast.info(`${correctAnswer}`, { autoClose: 2000 })
              }
              className="h-6 w-6  dark:text-gray-100"
            />
          </button>
        </div>
        <div className="flex items-center justify-between rounded-lg p-4 dark:bg-gray-600">
          <div>
            <div className="flex items-center  mb-4">
              <input
                id="country-option-1"
                onClick={() => {
                  if (options[0] === correctAnswer) {
                    toast.success("Correct answer", { autoClose: 750 });
                  } else {
                    toast.error("Incorrect answer", { autoClose: 750 });
                  }
                }}
                type="radio"
                name={id}
                value="USA"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-1"
                aria-describedby="country-option-1"
                // checked=""
              />
              <label
                for="country-option-1"
                className="text-sm font-medium dark:text-gray-100 ml-2 block"
              >
                {options[0]}
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-2"
                onClick={() => {
                  if (options[1] === correctAnswer) {
                    toast.success("Correct answer", { autoClose: 750 });
                  } else {
                    toast.error("Incorrect answer", { autoClose: 750 });
                  }
                }}
                type="radio"
                name={id}
                value="Germany"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-2"
                aria-describedby="country-option-2"
              />
              <label
                for="country-option-2"
                className="text-sm font-medium dark:text-gray-100 ml-2 block"
              >
                {options[1]}
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-3"
                onClick={() => {
                  if (options[2] === correctAnswer) {
                    toast.success("Correct answer", { autoClose: 750 });
                  } else {
                    toast.error("Incorrect answer", { autoClose: 750 });
                  }
                }}
                type="radio"
                name={id}
                value="Spain"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-3"
                aria-describedby="country-option-3"
              />
              <label
                for="country-option-3"
                className="text-sm font-medium dark:text-gray-100 ml-2 block"
              >
                {options[2]}
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                onClick={() => {
                  if (options[3] === correctAnswer) {
                    toast.success("Correct answer", { autoClose: 750 });
                  } else {
                    toast.error("Incorrect answer", { autoClose: 750 });
                  }
                }}
                type="radio"
                name={id}
                value="United Kingdom"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-4"
                aria-describedby="country-option-4"
              />
              <label
                for="country-option-4"
                className="text-sm font-medium dark:text-gray-100 ml-2 block"
              >
                {options[3]}
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default QuizPage;
