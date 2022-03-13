
/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection
.once('open',()=> console.log('CONNECT'))
.on('error' , (err) => {
  console.log(`cold not connect`,err)

});

*/



const {MongoClient ,ObjectId, ConnectionCheckOutFailedEvent}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;
  //reading
  const object = new ObjectId();
//  console.log(object);


  const db = client.db('animals');
  //insering
/*
  db.collection('mamals').insertOne({
    name : 'dog',
    legs : 4

  },(err,result) => {
if(err) return console.log(err)
console.log('inserted');


  })
*/
//fetching
/*
 console.log('CONNECTED');

  db.collection('mamals').find().toArray(function (err, result) {
   if (err) throw err

   console.log(result)
  })
  */


//updating

/*
db.collection('mamals').findOneAndUpdate({

  _id: new ObjectId('6204f1a4dcd86003068b809f')

} , 
{ $set: { name: 'updated'}}
).then(result => { console.log(result)}).catch(err => console.log(err));

*/

//deleting
/*
db.collection('mamals').findOneAndUpdate({

  _id: new ObjectId('6204f1a4dcd86003068b809f')

} , 
{ $set: { name: 'deleted'}}
).then(result => { console.log(result)}).catch(err => console.log(err));

*/

})
