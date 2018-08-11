// import Aragon from '@aragon/client'
const app = require('./script')
// const app = new Aragon()

app.events()
.on('data', function(event){
  console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
  // remove event from local database
})
.on('error', console.error);