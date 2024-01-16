const express = require("express");

const app = express();
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Welcome Ironhacker. :) with nodemon</h1>");
});

app.get("/api/books", (_, response) => {
  const books = [
    { title: "Rick&Morty", pages: 35 },
    { title: "Solo Leveling", pages: 150 },
    { title: "Arslan", pages: 150 },
  ];

  response.json(books);
});

app.get("/api/projects", (_, response) => {
  response.json(projects);
});

app.get("/api/articles", (_, response) => {
  response.json(articles);
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
