// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const dbName = 'book'
// const client = new MongoClient(url,{userNewUrlParser : true})
const express = require('express')
const app = express()

const port = 4000


app.use(express.urlencoded({extended : true}))

app.use('/', require('./routes/book'))


app.listen(port,()=>{
 console.log(`running on port ${port}`);
 
})



