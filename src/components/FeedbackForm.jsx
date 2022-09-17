import { useState } from "react";
import Button from './shared/button'
import RatingSelect from "./RatingSelect";


function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10){
      setMessage('Text must be at least 10 Characters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value);
  };

  return (
    <div className="card">
      <form action="">
        <h2> How is our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Your Review"
            value={text}
          />
          <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
