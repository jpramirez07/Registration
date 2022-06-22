const express = require('express');

//Controllers
const {getAllRegistration, getRegistratinById, entryRegistration, exitRegistration, cancelRegistration} = require('../controllers/users.controler')

const usersRouter = express.Router();

usersRouter.get('/', getAllRegistration);

usersRouter.get('/:id', getRegistratinById);

usersRouter.post('/', entryRegistration);

usersRouter.patch('/:id', exitRegistration);

usersRouter.delete('/:id', cancelRegistration);

module.exports = { usersRouter };