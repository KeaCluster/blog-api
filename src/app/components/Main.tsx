"use client";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import CommentEditor from "./CommentEditor";
import { Comment as CommentType } from "../../types";

const Main = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [editingComment, setEditingComment] = useState<CommentType | null>(
    null,
  );

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => setComments(data))
      .catch((err) => console.error("Error: fetching comments", err));
  }, []);

  const handleAddComment = async (comment: { email: string; text: string }) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([...comments, newComment]);
    } else {
      console.error("Failed to add comment");
    }
  };

  const handleEditComment = async (
    id: number,
    updatedComment: { email: string; text: string },
  ) => {
    const res = await fetch(`/api/comments?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedComment),
    });

    if (res.ok) {
      const updated = await res.json();
      setComments(
        comments.map((comment) => (comment.id === id ? updated : comment)),
      );
      setEditingComment(null);
    } else {
      console.error("Failed to edit comment");
    }
  };

  const handleDeleteComment = async (id: number) => {
    const res = await fetch(`/api/comments?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setComments(comments.filter((comment) => comment.id !== id));
    } else {
      console.error("Failed to delete comment");
    }
  };

  const handleEditClick = (id: number) => {
    const comment = comments.find((comment) => comment.id === id);
    if (comment) setEditingComment(comment);
  };

  return (
    <div className="container mx-auto p-4 w-4/5 flex justify-center align-middle flex-col border border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Leave comments</h2>
      <CommentEditor onSubmit={handleAddComment} />
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            email={comment.email}
            text={comment.text}
            onEdit={handleEditClick}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
