import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

import { connectToSocket } from "./controllers/socketManeger.js";

import userRouter from "./routes/user.route.js";

const uri =
  "mongodb+srv://atharvakuratkar:KmovOMraZAFxnMu1@vidlink.pnzso.mongodb.net/?retryWrites=true&w=majority&appName=VidLink";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/api/v1/users",userRouter);

const start = async () => {
  const connectionDB = mongoose
    .connect(
      "mongodb+srv://atharvakuratkar:WFFJr6GTksJ4d2x3@vidlink.pnzso.mongodb.net/?retryWrites=true&w=majority&appName=vidlink"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

  server.listen(app.get("port"), () => {
    console.log("LISTENING ON PORT 8000");
  });
};

start();
//atharva123
