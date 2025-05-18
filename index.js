import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createSchema } from "./schema/createSchema.js";
import { updateSchema } from "./schema/updateSchema.js";
const app = express();
app.use(express.json());

const users = [];
//Create User
app.post("/Create", (req, res) => {
  try {
    const data = createSchema.parse(req.body);
    const id = uuidv4();
    const { name, email, age } = data;

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

//Read users
app.get("/read", (req, res) => {
  return res.status(200).send({
    data: users,
    message: "Users retrieved successfully",
  });
});

//Update users
app.patch("/update/:id", (req, res) => {
  try {
    const id = req.params.id;
    const data = updateSchema.parse(req.body);

    const findUser = users.findIndex((user) => {
      return user.id == id;
    });
    if (findUser === -1) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    users[findUser].name = data.name || users[findUser].name;
    users[findUser].email = data.email || users[findUser].email;
    users[findUser].age = data.age || users[findUser].age;
    res.status(200).send({
      data: users[findUser],
      message: "User updated successfully",
    });
    console.log(findUser);
  } catch (err) {
    return res.status(400).send({
      message: "Incomplete data",
      error: err,
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = users.findIndex((user) => {
      return user.id == id;
    });
    if (deleteUser === -1) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    users.splice(deleteUser, 1);
    return res.status(200).send({
      message: "User deleted successfully",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      error: err,
    });
  }
});
app.listen(3000, () => {
  console.log("Application is running ");
});
