import React from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function GoalForm({handleAdd}) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text == " ") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== " " && text.trim().length <= 10) {
      setMessage("text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      const newGoal = {
        text,
        rating,
      }
      handleAdd(newGoal);
      setText('')
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Kindly rate your Goal</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review
            "
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default GoalForm;
