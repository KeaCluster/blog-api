// Prev defined model (sequelizer)
/*
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";

interface CommentAttributes {
  id: number;
  email: string;
  text: string;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

class Comment
  extends Model<CommentAttributes, CommentCreationAttributes>
  implements CommentAttributes
{
  public id!: number;
  public email!: string;
  public text!: string;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
  },
);
*/
// Previously defined Model (not TS oriented)
// Docs for the new one: https://sequelize.org/docs/v6/other-topics/typescript/
/*
const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
*/

export default Comment;
