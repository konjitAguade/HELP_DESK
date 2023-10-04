const express = require('express');
const staffRouter =  express.Router();

//code
staffRouter.get('/', (req, res,next) => {
    res.send('home');
    next();
});


module.exports = staffRouter;