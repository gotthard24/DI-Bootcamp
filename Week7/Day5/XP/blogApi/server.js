const express = require('express')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const data = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.'
    },
    {
      id: 3,
      title: 'Third Blog Post',
      content: 'This is the content of the third blog post.'
    }
];

const port = 4000
app.listen(port, ()=> console.log(`Run on ${port}`))

app.get('/data/posts', (req,res) =>{
    res.json(data)
})

app.get('/data/posts/:id', (req,res) =>{
    const id = req.params.id
    const dataPiece = data.find(obj => obj.id == id);

    if (dataPiece) {
        res.send(dataPiece);
    } else {
        res.status(404).send('Post not found');
    }
})

app.post('/data/posts', (req,res) =>{
    data.push(req.body)
    res.json(data)
})

app.put('/data/posts/:id', (req,res) =>{
    const id = req.params.id
    const {title, content} = req.body
    const index = data.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    data[index] = {
        ...data[index],
        title,
        content,
    }

    res.json(data)
})

app.delete('/data/posts/:id', (req,res) =>{
    const {id} = req.params
    const index = data.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    data.splice(index,1)

    res.json(data)
})