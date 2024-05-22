interface CommentProps {
  id: number;
  email: string;
  text: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Comment = ({ id, email, text, onEdit, onDelete }): CommentProps => {
  return (
    <div className="comment">
      <p>{email}</p>
      <p>{text}</p>
      <div>
        <button onClick={() => onEdit(id)} className="edit-button">
          Edit
        </button>
        <button onClick={() => onDelete(id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
