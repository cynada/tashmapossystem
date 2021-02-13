import express from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { getToken, isAuth } from "../util";

const router = express.Router();
var pw;

router.put("/:id", isAuth, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const signinUser = await User.findOne({
      email: req.body.email,
    });
    if (signinUser) {
      pw = await bcrypt.compare(req.body.password, signinUser.hash);
      if (pw) {
        res.send({
          _id: signinUser.id,
          name: signinUser.name,
          email: signinUser.email,
          isAdmin: signinUser.isAdmin,
          token: getToken(signinUser),
        });
      } else {
        res.status(401).send({ message: "Invalid password." });
      }
    } else {
      res.status(401).send({ message: "User does not exist. Please sign up!" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      hash: await bcrypt.hash(req.body.password, 10),
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: "Invalid User Data." });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

// router.get("/createadmin", async (req, res) => {
//   try {
//     const user = new User({
//       name: "Cyanda",
//       email: "admin@cynada.com",
//       password: "1234",
//       isAdmin: true,
//     });
//     const newUser = await user.save();
//     res.send(newUser);
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });

export default router;
