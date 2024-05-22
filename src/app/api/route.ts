import { NextApiRequest, NextApiResponse } from "next";
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from "./comments/comments.controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getComments(req, res);
      break;
    case "POST":
      await createComment(req, res);
      break;
    case "PUT":
      await updateComment(req, res);
      break;
    case "DELETE":
      await deleteComment(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not allowed`);
      break;
  }
}
