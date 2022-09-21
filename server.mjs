import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("someone is requesting on this server");
    res.send('Hello World from abdul Basit!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})