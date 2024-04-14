"use client";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateFAQQuestion } from "@/redux/features/FAQQuestion";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  id: number;
  question: string;
  answer: string;
}

const Question: React.FC<Props> = ({ id, question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const activeQuestionId = useAppSelector(
    (state) => state.FAQQuestionReducer.value.state,
  );

  const openAccordion = (questionId: number) => {
    setQuestionOpen((prevState) => !prevState);
    dispatch(updateFAQQuestion(questionId));
  };

  return (
    <div
      className={`${questionOpen && activeQuestionId === id ? "border-2 border-brand shadow-none" : ""} shadow-[0px_5px_16px_0_rgba(8,15,52,0.06)] rounded-2xl flex flex-col md:max-w-[45rem] lg:max-w-[60rem] px-4 py-5`}
    >
      <div
        className="flex items-start text-start px-4 gap-4 justify-between flex-col xs:items-center xs:flex-row cursor-pointer"
        onClick={() => openAccordion(id)}
      >
        <span className="text-lg max-w-full xs:max-w-[80%]">{question}</span>
        {questionOpen && activeQuestionId === id ? (
          <div className="flex items-center justify-center p-2 rounded-full bg-brand">
            <IoChevronDownOutline size={25} cursor="pointer" color="white" />
          </div>
        ) : (
          <div className="p-2 rounded-full shadow-[0px_5px_16px_0_rgba(8,15,52,0.06)]">
            <IoChevronForwardOutline
              size={25}
              cursor="pointer"
              color="#10a969"
            />
          </div>
        )}
      </div>
      <div
        className={`text-start text-secondary grid overflow-hidden transition-all duration-300 ease-in-out ml-4 ${questionOpen && activeQuestionId === id ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
      >
        <span className="overflow-hidden leading-[2rem] text-[#4C4C4C]">
          {answer}
        </span>
      </div>
    </div>
  );
};

export default Question;
