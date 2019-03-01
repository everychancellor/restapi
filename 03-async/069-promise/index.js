const debug = require('debug')('app:startup');
console.log('Before');

/*
  const p = getUser(1);
  p.then(user => {
    debug('user', user);
  });
*/

getUser(1)
  .then(user => getRepositories(user.gitHubUserName))
  .then(repos => debug('Repos', repos))
  .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id) {
  debug('Reading a user from a database...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, gitHubUserName: 'verychancellor' });
    }, 2000);
  });
}

function getRepositories(username) {
  debug('Getting list of repo...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}
