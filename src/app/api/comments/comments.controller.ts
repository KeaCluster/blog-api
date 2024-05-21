import { NextApiRequest, NextApiResponse } from "next";
import Comment from "@/models/comment";

// GET all
export async function getComments(req: NextApiRequest, res: NextApiResponse) {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}

// POST
export async function createComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, text } = req.body; // destructuring
    const newComment = await Comment.create({ email, text });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit comment " });
  }
}

// PUT
export async function updateComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const { email, text } = req.body;
    const comment = await Comment.findByPk(id as string);
    if (comment) {
      comment.email = email;
      comment.text = text;
      await comment.save();
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update comment" });
  }
}

// DELETE
export async function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const comment = await Comment.findByPk(id as string);
    if (comment) {
      await comment.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
}
