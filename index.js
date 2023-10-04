var express = require("express");

var app = express();
app.get('/read-all-users', (req, res)=> {
    res.send("list of users");
app.use('/u', users);
});
app.get('/get-users-details', (req, res)=> {
const userObj = {
    id: 10,
    name: "Konjit",
    lastName: "Agu",
    status: true    
}
res.send(userObj);
});

app.listen(3030);