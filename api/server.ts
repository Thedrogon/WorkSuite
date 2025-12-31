import express from 'express'

const app = express()

const PORT = 5002

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
    
})

app.get('/hello', (_,res) => {
    res.json({'message': 'Hello World'})
})



