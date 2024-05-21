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
export async function updateComment();

// DELETE
