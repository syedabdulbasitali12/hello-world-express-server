import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("main page");
    res.send('you can ask for pizza, water, icecream')
})



// app.get('/water', (req, res) => {
//     console.log("Someone is asking for water");
//     res.send('Here is your water')
// })

// app.post('/water', (req, res) => {
//     console.log("Someone is offering water");
//     res.send('ok water is received')
// })

// app.get('/pizza', (req, res) => {
//     console.log("Someone is asking for Pizza");
//     res.send('Here is your Pizza')
// })

// app.post('/pizza', (req, res) => {
//     console.log("Someone is offering pizza");
//     res.send('ok pizza is received')
// })

// app.get('/icecream', (req, res) => {
//     console.log("Someone is asking for icecream");
//     res.send('Here is your icecream')
// })

// app.post('/icecream', (req, res) => {
//     console.log("Someone is offering icecream");
//     res.send('ok icecream is received')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})