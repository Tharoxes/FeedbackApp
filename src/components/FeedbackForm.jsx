import { useState } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card">
      <h2> How is our service?</h2>
      {/* {rating select buttons} */}
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Your Review"
          value={text}
        />
        <button type="submit">Send</button>
      </div>
    </div>
  );
}

export default FeedbackForm;
