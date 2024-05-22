import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// GET all
export const getComments = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const comments = await prisma.comment.findMany();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// POST
export const createComment = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { email, text } = req.body;
    const newComment = await prisma.comment.create({
      data: { email, text },
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

// PUT
export const updateComment = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { id } = req.query;
    const { email, text } = req.body;
    const updatedComment = await prisma.comment.update({
      where: { id: Number(id) },
      data: { email, text },
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update comment" });
  }
};

// DELETE
export const deleteComment = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { id } = req.query;
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};
