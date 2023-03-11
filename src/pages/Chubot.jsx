import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Chatbot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { db, auth } from "../firebase-config";

const Chubot = () => {
  const [username, setUsername] = useState("");
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  const [in3, setIn3] = useState("");
  const chatref = collection(db, "interest");
  const steps = [
    {
      id: "Greet",
      message: "Welcome to e-learning!",
      trigger: "input",
    },
    {
      id: "input",
      message: "Hello! Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          setUsername(value);
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, please select any three interests from below",
      // trigger: "issues",
      trigger: "interest1",
    },
    {
      id: "interest1",
      message: "Science,Maths,Skills,Fitness,Current affairs,History",
      trigger: "mes1",
    },
    {
      id: "mes1",
      message: "Enter your first interest",
      trigger: "i1",
    },
    {
      id: "i1",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          setIn1(value);
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "mes2",
    },
    {
      id: "mes2",
      message: "Enter your second interest",
      trigger: "i2",
    },
    {
      id: "i2",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          setIn2(value);
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "mes3",
    },
    {
      id: "mes3",
      message: "Enter your third interest",
      trigger: "i3",
    },
    {
      id: "i3",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          setIn3(value);
          return true;
        } else {
          return "Please input alphabet characters only.";
        }
      },
      trigger: "q-submit",
    },
    {
      id: "q-submit",
      message: "Do you wish to submit your interest?",
      trigger: "submit",
    },
    {
      id: "submit",
      options: [
        { value: "y", label: "Yes", trigger: "end-message" },
        { value: "n", label: "No", trigger: "no-submit" },
      ],
    },
    {
      id: "no-submit",
      message: "Your information was not submitted.",
      trigger:"interest",
    },
    {
      id: "end-message",
      message:"Your interest were submitted successfully",
      end: true,
    },
  ];

  if (username && in1 && in2 && in3){
  try {
    addDoc(chatref, {
      name: username,
      interest1: in1,
      interest2: in2,
      interest3: in3,
      id: auth.currentUser.uid,
    });
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      {" "}
      <Segment floated="left">
        <Chatbot steps={steps} />
      </Segment>
    </>
  );
};

export default Chubot;



// useEffect(()=>{
    
  //   try {
  //     addDoc(chatref, {
  //       name: username,
  //       interest1: in1,
  //       interest2: in2,
  //       interest3: in3,
  //       id: auth.currentUser.uid,
  //     });
  //     alert('Interest saved')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },)