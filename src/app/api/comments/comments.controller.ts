import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all
export const getComments = async (request: NextRequest) => {
  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 },
    );
  }
};

// POST
export const createComment = async (request: NextRequest) => {
  try {
    const { email, text } = await request.json();
    const newComment = await prisma.comment.create({
      data: { email, text },
    });
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 },
    );
  }
};

// PUT
export const updateComment = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const { email, text } = await request.json();
    const updatedComment = await prisma.comment.update({
      where: { id: Number(id) },
      data: { email, text },
    });
    return NextResponse.json(updatedComment);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update comment" },
      { status: 500 },
    );
  }
};

// DELETE
export const deleteComment = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 },
    );
  }
};
