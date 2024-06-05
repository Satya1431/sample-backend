import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is Ready");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "This is the first object",
      content: "This is some content for the first object.",
    },
    {
      id: 2,
      title: "This is the second object",
      content: "This is some content for the second object.",
    },
    {
      id: 3,
      title: "This is a new object",
      content: "This is some new content.",
    },
    {
      id: 4,
      title: "Another object joins the party",
      content: "Here's some additional information.",
    },
  ];

  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at: ${port}`);
});
