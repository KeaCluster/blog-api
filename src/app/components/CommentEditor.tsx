import { useState } from "react";

const CommentEditor = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, text });
    setEmail("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="input-field"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment ..."
        required
        className="textarea-field"
      />
      <button type="submit" className="submit-button">
        Comment
      </button>
    </form>
  );
};

export default CommentEditor;
