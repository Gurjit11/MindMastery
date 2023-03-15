import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Feedback({ UserAuth }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feed, setFeed] = useState("");
  let navigate = useNavigate();
  const ratingRef = collection(db, "rating");

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleupload = async () => {

    try {
      await addDoc(ratingRef, {
        rating: currentValue,
        feed,
        id: auth.currentUser.uid,
        type: "null"
      });
      alert("Feedback submitted successfully");
      setCurrentValue(0);
      setFeed("");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting feedback");
    }
  };

  return (
    <div style={styles.container} className='min-h-[600px]'>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="shadow-xl bg-white flex flex-col py-10 rounded-xl p-10">

          <h2 className="font-bold text-2xl text-center"><b> Feedback </b></h2>
          <div style={styles.stars} className='p-10 border flex justify-center items-center'>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
          <textarea
            onChange={(event) => {
              setFeed(event.target.value);
            }}
            placeholder="What's your experience?"
            style={styles.textarea}
            value={feed}
          />

          <button onClick={handleupload} style={styles.button} className='bg-blue-400 hover:bg-green-500 text-white font-bold'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};

export default Feedback;