const express = require('express')
const app = express()
const port = 4000
const path = require('path')

/* Middleware */
app.use(express.static('public'))

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/home',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));



app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
})