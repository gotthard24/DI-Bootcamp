const express = require('express');
const app = express();

app.use(express.json());

const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedYear: 1925
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedYear: 1960
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      publishedYear: 1949
    }
];

let maxId = 3

const port = 5000
app.listen(port, ()=> console.log(`Run on ${port}`))

app.get('/api/books', (req,res) =>{
    res.send(books)
})

app.get('/api/books/:bookid', (req,res) =>{
    const id = req.params.bookid
    const book = books.find(obj => obj.id == id)

    if (!book){
        return res.status(404).send('Book not found')
    }
    res.json(book)
})

app.post('/api/books/', (req,res) =>{
    const {title, author, publishedYear} = req.body
    const newBook ={
        id: ++maxId,
        title,
        author,
        publishedYear
    }
    books.push(newBook)
    res.status(201).json(books)
})