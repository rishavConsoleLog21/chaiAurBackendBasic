import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, joke: "What do you call a very small valentine? A valen-tiny!" },
    {
      id: 2,
      joke: "What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!",
    },
    {
      id: 3,
      joke: "Why don't sharks like to eat clowns? Because they taste funny!",
    },
    {
      id: 4,
      joke: "What did the painter say to the wall? One more crack like that and I'll plaster you!",
    },
  ];
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
