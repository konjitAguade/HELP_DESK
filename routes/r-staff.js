const express = require('express');
const staffRouter =  express.Router();

//code
staffRouter.get('/', (req, res,next) => {
    res.send('home');
    next();
//users/get-user-details
Router.get('/get-user-details', (req, res)) 
=> {
    res.send("Get Request for users")
}
});


module.exports = staffRouter;