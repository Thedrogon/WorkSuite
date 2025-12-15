import express from 'express'

const app = express()

const PORT = 5001

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
    
})

app.get('/api', (_,res) => {
    res.json({'message': 'Hello World'})
})



