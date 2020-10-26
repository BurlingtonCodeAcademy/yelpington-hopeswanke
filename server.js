const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// security so people can only see public file
app.use(express.static('.'))

// Path resolve to index.html doc
app.get('/', (request, response)=>{
    response.sendFile(path.resolve('./index.html'))
})


// listen for server to start
app.listen(port, ()=>{
    console.log('you are now listening on: ' + port)
})