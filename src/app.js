import express from "express";
import pinkFlamingo from "./pink-flamingo";

const app = express();

const cache = {};

function pinkFlamingoWithCache(number, cache) {
  let result = cache[number];

  if (typeof result === "undefined") {
    result = pinkFlamingo(number);
    cache[number] = result;
  }

  return result;
}

app.get("/", (req, res) => {
  const result = [];

  for (let i = 0; i <= 100; i++) {
    result.push(pinkFlamingoWithCache(i, cache));
  }

  res.set("Content-Type", "text/plain");
  res.send(result.join("\n").toString());
});

app.get("/:number", (req, res) => {
  const number = req.params.number;

  const result = pinkFlamingoWithCache(number, cache);

  res.set("Content-Type", "text/plain");
  res.send(result.toString());
});

export default app;
