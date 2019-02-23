import express from "express";
import pinkFlamingo from "./pink-flamingo";

const app = express();

app.get("/", (req, res) => {
  const result = [];

  for (let i = 0; i <= 100; i++) {
    result.push(pinkFlamingo(i));
  }

  res.set("Content-Type", "text/plain");
  res.send(result.join("\n").toString());
});

app.get("/:number", (req, res) => {
  const number = req.params.number;
  const result = pinkFlamingo(number);

  res.set("Content-Type", "text/plain");
  res.send(result.toString());
});

export default app;
