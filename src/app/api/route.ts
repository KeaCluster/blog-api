import { NextRequest } from "next/server";
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "./comments/comments.controller";

export async function GET(request: NextRequest) {
  return getComments(request);
}

export async function POST(request: NextRequest) {
  return createComment(request);
}

export async function PUT(request: NextRequest) {
  return updateComment(request);
}

export async function DELETE(request: NextRequest) {
  return deleteComment(request);
}
