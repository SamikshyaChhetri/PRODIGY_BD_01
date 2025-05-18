import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createSchema } from "./schema/createSchema.js";
const app = express();
app.use(express.json());

const users = [];
app.post("/Create", (req, res) => {
  try {
    createSchema.parse(req.body);
    const id = uuidv4();
    const { name, email, age } = req.body;

    users.push({
      id,
      name,
      email,
      age,
    });
    return res.status(201).send({
      data: users,
      message: "User created successfully",
    });
  } catch (e) {
    return res.status(400).send({
      message: "Incomplete data",
      error: e,
    });
  }
});

app.listen(3000, () => {
  console.log("Application is running ");
});
