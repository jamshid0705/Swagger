const express=require('express')
const app=express()
const swaggerUI=require('swagger-ui-express')
const swaggerJSDOC=require('swagger-jsdoc') // frond ni tahlab beradi 
const bookRout=require('../routes/book')

const options = {
  apis: ["swagger/*.js"],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Store API",
      version: "1.0.0",
      description: "A simple Book Store project",
    },
    servers: [{ url: "http://localhost:8000/api/v1" }],
  },
};

const jsDoc=swaggerJSDOC(options)





app.use(express.json())

app.use("/swagger",swaggerUI.serve,swaggerUI.setup(jsDoc))
app.use('/api/v1/books',bookRout)

module.exports=app