// const contractArtifact = artifacts.require('InvoiceApp');
var InvoiceApp = require('../build/contracts/InvoiceApp.json');
var Web3 = require('web3');
var web3 = new Web3("ws://localhost:8545");
// console.log(Object.keys(contractArtifact));
// console.dir(contractArtifact, {depth: null});
// console.dir(contractArtifact.abi, {depth: null});

var myContract = new web3.eth.Contract(InvoiceApp.abi,
  '0xdc6a990f5b35c10cd1dc1f07ea38dc843e7ae1a9',
  {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

// myContract.methods.getCreatePaymentRequest((error, result) => {
//   console.log('here', error, result);
// })

// var f1 = web3.eth.filter(myContract);
// // var f1 = myContract.CreatePaymentRequest();
// function trigger() {
//   console.log('here');
// }
// f1.watch(trigger);

// myContract.CreatePaymentRequest().watch((error, event) => { console.log(event); })
// var event = myContract.allEvents().watch({}, '');
//     // or use conference.Deposit() or .Refund()
//     event.watch(function (error, result) { 
//       if (error) {
//         console.log("Error: " + error);
//       } else {
//         console.log("Event: " + result.event);
//     }
//   })

myContract.events.CreatePaymentRequest({}, function(error, event){ console.log(event); })
.on('data', function(event){
  console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
  // remove event from local database
})
.on('error', console.error);

myContract.events.Decrement({}, function(error, event){ console.log(event); })
.on('data', function(event){
  console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
  // remove event from local database
})
.on('error', console.error);
// myContract.methods.CreatePaymentRequest('123', 123).call();
// myContract.CreatePaymentRequest({}, function(error, event){ console.log(event); })
// .on('data', function(event){
//   console.log(event); // same results as the optional callback above
// })
// .on('changed', function(event){
//   // remove event from local database
// })
// .on('error', console.error);