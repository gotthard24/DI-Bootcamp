const {_getAllUsers,
    _getUserById} = require('../models/users.model.js')

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
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}


module.exports = {
    getAllUsers,
    getUserById,
}