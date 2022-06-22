const express = require('express')

// Routers
const { usersRouter } = require('./router/users.routers')

// Utils
const {db} = require('./utils/database.util')

//Init express app
const App = express()

App.use(express.json())

//definir enpoints async / away

App.use('/api/v1/registrations', usersRouter)

db.authenticate()
    .then(() => console.log("Db authenticated"))
    .catch(err => console.log(err))
db.sync()
    .then(() => console.log("Db synced"))
    .catch(err => console.log(err))

App.listen(3000, () => {
    console.log('express app running!')
})