"use client";
import CommentEditor from "./CommentEditor";

const Main = () => {
  return (
    <div className="container mx-auto p-4 w-4/5 flex justify-center align-middle flex-col">
      <h2 className="text-2xl font-bold mb-4">Leave comments</h2>
      <CommentEditor onSubmit={() => console.log("hello")} />
    </div>
  );
};

export default Main;
