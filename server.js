if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname+"/views")
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})

const bdd = mongoose.connection;

bdd.on('error', error=>console.log(error))
bdd.once('open', ()=>console.log("Connscted to mongoose successfully"))

app.use('/', indexRouter)

app.listen(process.env.PORT || 4000)

