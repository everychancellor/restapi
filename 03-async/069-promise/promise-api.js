Promise.resolve({ id: 1 })
  .then(result => console.log('Result', result))
  .catch(error => console.log(error));

Promise.reject(new Error('Some error happened'))
  .then(result => console.log('Result', result))
  .catch(error => console.log(error));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('id - ', id);
      resolve({ user: id, status: 'created' });
    }, 2000);
  });
}

Promise.all([getUser(1), getUser(2), getUser(3)])
  .then(result => {
    console.log('result', result);
  })
  .catch(error => console.log(error));

//show result of the first promise which return a value
Promise.race([getUser(1), getUser(2), getUser(3)])
  .then(result => {
    console.log('first getting result', result);
  })
  .catch(error => console.log(error));

/*
getUser(1)
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.log('Error', error);
  });
  */
