const express = require("express");
var jwt = require('jsonwebtoken');
const app = express();
const port = 3005;
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


// const xyz=()=>console.log("xyz")
// middleware  next()
// app.use()
app.use(express.json())
app.post('/login', (req, res) => {
  var token = jwt.sign(req.body, 'shhhhh');
  console.log(req.body)
    res.send(token );
});
app.post('/verify', (req, res) => {
  var decoded = jwt.verify(req.body.token, 'shhhhh');
  console.log(req.body)
  let x = {
    email:"xyz@gmail.com"
  }
  if(decoded.email===x.email){
    res.send(decoded );
  }
});
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


// controller , middleware
app.listen(port, () => {
  console.log(`Example app listening on port xyz ${port}`);
});
