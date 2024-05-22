"use client";

interface CommentProps {
  id: number;
  email: string;
  text: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Comment = ({ id, email, text, onEdit, onDelete }: CommentProps) => {
  return (
    <div className="p-4 mb-4 border rounded border-gray-300">
      <p className="font-bold">{email}</p>
      <p className="mt-2">{text}</p>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => onEdit(id)}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
