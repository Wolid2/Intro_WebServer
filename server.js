// importing a modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

// importing the router from routes
const indexRouter = require('./routes/index.js');
//creating an express app
const app = express();
//
app.use(bodyParser.urlencoded({ extended: false }))

//adding set up file serving
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// adding  set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

//  starting the server on the specific port
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});


// // starting the server on the specific port


// const server = app.listen(process.env.PORT || 3000, function () {
//     const port = server.address().port;
//     console.log('Express server is running on port',port)
//
// })