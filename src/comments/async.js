//Asyncronous events

//promise() that object will have a value of resolve or reject.
//resolve if api call is successfull
//reject if api call gives an error
//promise will be in a state of pending until resolve or reject
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000); //after 1 second, i want promise to call the resolve key with value "I have succeeded" and promise holds value
  } else {
    reject("I have failed");
  }
});
//access the value
myPromise
  .then(value => value + "!!!!")
  .then(newValue => console.log(newValue))
  .catch(rejectValue => console.log(rejectValue));

//similar to

fetch("http://jsonplaceholder.typicode.com/todos/1")
  .then(something => something.json()) //
  .then(something2 => console.log(something2))
  .catch(error => console.log("Error exists"));
