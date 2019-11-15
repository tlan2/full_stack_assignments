const express = require('express');
//const form = require('./form');
const app = express();

function submitLogger(){
  console.log("name: "+document.getElementById("first_name").value);
  console.log("email: "+document.getElementById("email").value);
  console.log("message: "+document.getElementById("form_content").value);
}


function resetForm(){
  console.log('reset button');
  document.getElementById("comment_form").reset();
}

var path = require('path');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join('./')));

app.get('/submit', (req, res)=>{
  res.send('GET REQUEST');
})

app.post('/submit', (req, res) => {
  const name = req.body.first_name;
  const email = req.body.email;
  const comment = req.body.form_content;
  res.write(`name: ${name}\n`);
  res.write(`email: ${email}\n`);
  res.write(`comment: ${comment}\n`)
  // res.write('POST REQUEST');
  // console.log('from app.post: '+name);
  // console.log('from app.post: '+email);
  // console.log('from app.post: '+comment);
  res.end()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening on port 3000'));