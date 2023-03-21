const express = require("express")
const app = express()
const { typeError } = require('./middlewares/errors');
const PORT = 8080
const cors = require("cors")

app.use(express.json(), cors())

app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));

app.use(typeError)
app.listen (PORT,()=>console.log(`servidor levantado en el puerto ${PORT}`))