const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./Data/Courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('One University api running')
})

//sending all courses
app.get('/courses', (req, res) => {
    res.send(courses)
})

//sending single course
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(n => n.id === id)
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log(`One university running on port : ${port}`);
})