import express from "express";
import fetchPosts from "./data/dataService.js";
const app = express();

app.use(express.json());

const port = 5001
app.listen(port, ()=> console.log(`Run on ${port}`))

fetchPosts('https://jsonplaceholder.typicode.com/posts')