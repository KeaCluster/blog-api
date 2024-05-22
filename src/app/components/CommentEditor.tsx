"use client";
import { FormEvent, useState } from "react";

interface CommentEditorProps {
  onSubmit: (comment: { email: string; text: string }) => void;
}

const CommentEditor = ({ onSubmit }: CommentEditorProps) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ email, text });
    // Reset state on submit
    setEmail("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full align-middle column flex-nowrap"
    >
      <div className="w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-800 rounded h-8 text-black"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment ..."
          required
          className="w-full p-2 border border-gray-800 rounded text-black"
        />
        <div className="w-full p-2 flex justify-end">
          <button
            type="submit"
            className=" my-4 p-3 w-24 border border-black bg-gray-200 text-black rounded"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentEditor;
