"use client";
import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateActiveQuestionId } from "@/redux/features/updatedActiveQuestionId";

interface Props {
  id: number;
  question: string;
  answer: string;
}

const Question: React.FC<Props> = ({ id, question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const activeQuestionId = useAppSelector(
    (state) => state.activeQuestionIdReducer.value.state,
  );

  const openAccordion = (questionId: number) => {
    setQuestionOpen((prevState) => !prevState);
    dispatch(updateActiveQuestionId(questionId));
  };

  return (
    <div className="flex flex-col md:max-w-[45rem] lg:max-w-[60rem]">
      <div
        className="flex items-start text-start p-5 gap-4 border border-brand text-secondary justify-between flex-col xs:items-center xs:flex-row cursor-pointer"
        onClick={() => openAccordion(id)}
      >
        <span className="text-lg text-brand max-w-full xs:max-w-[80%]">
          {question}
        </span>
        {questionOpen && activeQuestionId === id ? (
          <BiSolidDownArrow
            size={25}
            cursor="pointer"
            fill="#10a969"
          />
        ) : (
          <BiSolidRightArrow size={25} cursor="pointer" fill="#10a969" />
        )}
      </div>
      <div
        className={`border-l border-r border-b border-brand text-start text-secondary grid overflow-hidden p- transition-all duration-300 ease-in-out ${questionOpen && activeQuestionId === id ? "grid-rows-[1fr] opacity-100 p-4" : "grid-rows-[0fr] opacity-0"}`}
      >
        <span className="overflow-hidden leading-[2rem] tracking-wide">
          {answer}
        </span>
      </div>
    </div>
  );
};

export default Question;
