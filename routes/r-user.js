const express = require('express');
const { route } = require('./r-staff');
const userRouter = 

app.get('/', (req, res) => {
    res.send('Home page');
});

app.post('/register', (req, res) => {
    res.send('register page');
});

app.post('/login', (req, res) => {
    res.send('login page');
});
//CRUD
app.post('/request/create', (req, res) => {
    res.send('request creation page');
});

app.get('/request/view', (req, res) => {
    res.send('request view page');
});

app.put('/request/update', (req, res) => {
    res.send('request update page');
});

app.delete('/request/resolve', (req, res) => {
    res.send('request resolve page');
});
 
app.post('/feedback', (req, res) => {
    res.send('feedback page');
    
});
route.use('/',(req, res)=>{
    res.send("Get Request for users");
});
module.express = userRouter;

