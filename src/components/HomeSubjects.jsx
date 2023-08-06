import React from "react";
import { Link } from "react-router-dom";

const SectionCard = ({ title, link, imageSrc, description }) => {
  return (
    <div className="flex justify-between p-1 shadow-2xl max-w-[300px] sm:m-1 max-h-[250px] overflow-y-auto rounded-xl border-4 border-blue-500">
      <div className="flex flex-col justify-between">
        <Link to={link}>
          <img className="md:min-w-[150px]" src={imageSrc} alt={title} />
          <div className="text-center font-bold">{title}</div>
        </Link>
      </div>
      <div className="hidden md:block m-1">{description}</div>
    </div>
  );
};

const HomeSubjects = () => {
  const sectionsData = [
    {
      title: "Science",
      link: "/type/Space science",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3301/3301569.png",
      description:
        "Science is a methodical approach to understanding the natural world through observation and experimentation.",
    },
    {
      title: "Geography",
      link: "/type/indian geography",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341093.png",
      description:
        "Geography is the study of the Earth's physical features and how people interact with them.",
    },
    {
      title: "Maths",
      link: "/type/maths icse",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3153/3153038.png",
      description:
        "Mathematics is the study of numbers, shapes, and their relationships.",
    },
    {
      title: "History",
      link: "/type/indian history",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1825/1825357.png",
      description:
        "History is the study of the past using written documents and artifacts to understand how societies and cultures have changed over time.",
    },
    {
      title: "World Affairs",
      link: "/type/political affairs",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/8322/8322494.png",
      description:
        "World affairs include significant global events such as the COVID-19 pandemic, climate change, conflicts, and struggles for human rights.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex sm:mx-10 gap-6">
        {sectionsData.map((section, index) => (
          <SectionCard key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default HomeSubjects;
