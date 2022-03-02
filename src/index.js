// const mongoose=require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
// const DB = ' mongodb+srv://ladalipravin:Ktxildd7HtOatr5Y@cluster0.mt4xp.mongodb.net/ladali?retryWrites=true&w=majority'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
mongoose.connect( "mongodb+srv://ladalipravin:Ktxildd7HtOatr5Y@cluster0.mt4xp.mongodb.net/ladali?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifideTopology:true,
    useFindAndModify:false


})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log('no connection') )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// https://mongoosejs.com/docs/populate.html

