import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// GET all
export async function getComments(req: NextApiRequest, res: NextApiResponse) {
  try {
    const comments = await prisma.comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}

// POST
export async function createComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, text } = req.body; // destructuring
    const newComment = await prisma.comment.create({ email, text });
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
    const comment = await prisma.comment.update({
      where: { id: Number(id) },
      data: { email, text },
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to update comment" });
  }
}

// DELETE
export async function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
}
