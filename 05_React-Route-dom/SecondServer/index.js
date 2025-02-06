import express from "express";
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      joke: "What's the difference between a cow and a camel? One ear?",
    },
    {
      id: 3,
      joke: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 4,
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 5,
      joke: "What did the scarecrow say when he heard the clock strike midnight? 'It's getting dark! Time to sleep.'",
    },
    {
      id: 6,
      joke: "कपमा क्ेैतेक् केरमलत केर्ि केरिक सससनं. क हे्ि कते्रि ",
    },
  ];
  res.json(jokes);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
