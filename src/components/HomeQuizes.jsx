import React from "react";
import { Link } from "react-router-dom";

const QuizCategoryCard = ({ title, link, imageSrc }) => {
  return (
    <div className="flex justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 rounded-xl">
      <div className="flex flex-col justify-between">
        <Link to={link}>
          <img className="md:min-w-[150px]" src={imageSrc} alt={title} />
          <div className="text-center font-bold">{title}</div>
        </Link>
      </div>
    </div>
  );
};

const HomeQuizes = () => {
  const quizCategories = [
    {
      title: "Science",
      link: "/quiz/science",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3301/3301569.png",
    },
    {
      title: "Geography",
      link: "/quiz/geography",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341093.png",
    },
    {
      title: "Maths",
      link: "/quiz/maths",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3153/3153038.png",
    },
    {
      title: "History",
      link: "/quiz/history",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1825/1825357.png",
    },
    {
      title: "World Affairs",
      link: "/quiz/affairs",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/8322/8322494.png",
    },
  ];

  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex m-10 gap-10 justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full sm:w-[70%] px-10">
        {quizCategories.map((category, index) => (
          <QuizCategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default HomeQuizes;
