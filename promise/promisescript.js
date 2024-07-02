const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 6000);
});

console.log('Before calling the promise');

myPromise.then((successMessage) => {
  console.log('From Callback ' + successMessage);
});

console.log('After calling promise');
