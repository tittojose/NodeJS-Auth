const express = require('express');
const passport = require('passport');
const app = express();

app.use(passport.initialize());

const router = require('./router/index');
app.use('/',router);

app.listen('4000', function () {
    console.log('listening to port 4000');
});