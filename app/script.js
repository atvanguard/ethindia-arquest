import Aragon from '@aragon/client'

const app = new Aragon()

const initialState = {
  count: 0,
  address: 0
}
app.store(async (state, event) => {
  if (state === null) state = initialState

  switch (event.event) {
    case 'Increment':
      return { count: await getValue() }
    case 'Decrement':
      console.log('yoyo')
      console.log(event)
      return { count: await getValue() }
    default:
      return state
  }
})

function getValue() {
  // Get current value from the contract by calling the public getter
  return new Promise(resolve => {
    app
      .call('value')
      .first()
      .map(value => parseInt(value, 10))
      .subscribe(resolve)
  })
}

module.exports = app;

// app.events()
// .on('data', function(event){
//   console.log(event); // same results as the optional callback above
// })
// .on('changed', function(event){
//   // remove event from local database
// })
// .on('error', console.error);
