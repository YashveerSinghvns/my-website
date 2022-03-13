

const mongoose = require('mongoose');
const User = require('./models/User');
const express =require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
.once('open',()=> console.log('CONNECT'))
.on('error' , (err) => {
  console.log(`cold not connect`,err)

});
app.get('/',(req,res)=> {
  console.log('hi');
  res.send('Root');
});

app.post('/users', (req,res) => {

  const newUser = new User({
    firstName : req.body.firstName ,
    lastName: req.body.lastName,
    isActive: req.body.isActive
  });

  newUser.save().then(savedUser => {
    res.send('hmlo')
    console.log('post worked');
  }).catch(err=>{
    res.status(404).send('User Not Saved');
  });

});

app.get('/users',(req,res) =>{

  User.find({}).then(users=>{
    res.status(200).send(users);
  })
});

app.patch('/users/:id',(req,res)=>{

  const id =req.params.id;
  const firstName = req.body.firstName;


  User.findByIdAndUpdate({_id:id},{$set: {firstName: firstName}},{new:true} )
  .then(savedUser =>{

    res.send('user saved by patch')
  })
});
app.put('/users/:id',(req,res)=>{

  const id =req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;


  User.findByIdAndUpdate({_id:id},{$set: {firstName: firstName ,lastName : lastName}},{new:true} )
  .then(savedUser =>{

    res.send('user saved by put')
  })
});


/*
app.post('/users' , (req,res) => {
  
  res.send('Root');

});
*/
/*
app.post('/users' , (req,res) => {
  console.log('hi')
  const newUser = new User ({
    firstName: 'Maria 2',
    lastName: 'Diaz',
    isActive: 1
  
  

  });
  
  newUser.save().then(savedUser => {

    console.log('USER SAVED');
  });


  
  newUser.save(function(err,dataSaved ) {
    if(err) 
    return err;
    //console.log(dataSaved);
  res.send('user saved');
  });
  
});

*/


//app.post


const port = 4444 || process.env.PORT;

app.listen(port , () => {

  console.log(`listening on ${port}`);
});




