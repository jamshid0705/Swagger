const express=require('express')
const app=express()
const bookRout=require('../routes/book')
app.use(express.json())

app.use('/api/v1/books',bookRout)

module.exports=app