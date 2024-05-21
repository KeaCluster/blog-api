import { DataTypes } from "sequelize";
import sequelize from "@/lib/sequelize";

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

export default Comment;
