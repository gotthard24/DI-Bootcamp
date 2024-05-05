const {_getAllUsers,
    _getUserById,
    _changeUserById,
    _register,
    _login} = require('../models/users.model.js')

const getAllUsers = (req, res) =>{
    _getAllUsers()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const getUserById = (req, res) =>{
    const {id} = req.params
    _getUserById(id)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ msg: 'Task not found' });
            }
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const changeUserById = (req, res) =>{
    const {id} = req.params
    const {email, username, first_name, last_name} = req.body
    _changeUserById(id, email, username, first_name, last_name)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ msg: 'Task not found' });
            }
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const register = (req, res) =>{
    const {email, username, first_name, last_name, password} = req.body
    _register(email, username, first_name, last_name, password)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const login = (req, res) =>{
    const {username, password} = req.body
    console.log(username, password);
    _login(username, password)
        .then(data => {
            if(data){
                res.json(data);
            }
            else{
                res.status(404).json({msg: 'Incorrect username or password'});
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            res.status(500).json({msg: 'Something went wrong during login'});
        });
}

module.exports = {
    getAllUsers,
    getUserById,
    changeUserById,
    register,
    login,
}