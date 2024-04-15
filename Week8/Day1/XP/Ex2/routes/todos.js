const express = require('express');
const router = express.Router();

const todos = [
    { id: 1, todo: 'Buy groceries' },
    { id: 2, todo: 'Walk the dog' },
    { id: 3, todo: 'Finish homework' },
    { id: 4, todo: 'Call mom' },
    { id: 5, todo: 'Go to the gym' }
];

let maxIndex = todos.length;

router.get('/', (req, res) =>{
    res.status(200).json(todos);
});
router.post('/', (req, res) =>{
    const {todo} = req.body;
    todos.push({id: ++maxIndex, todo});
    res.status(200).json(todos);
});

router.put('/:id', (req, res) =>{
    const {id} = req.params
    const {todo} = req.body
    const index = todos.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    todos[index] = {
        ...todos[index],
        todo
    }

    res.status(200).json(todos)
})

router.delete('/:id', (req,res) =>{
    const {id} = req.params
    const index = todos.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    todos.splice(index,1)

    res.status(200).json(todos)
})


module.exports = router;