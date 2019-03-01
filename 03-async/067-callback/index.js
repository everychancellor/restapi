const debug = require('debug')('app:startup');
console.log('Before');
getUser(1, getUserCallback);

console.log('After');

function getUser(id, callback) {
  debug('Reading a user from a database...');
  setTimeout(() => {
    callback({ id, gitHubUserName: 'verychancellor' });
  }, 2000);
}

function getUserCallback(user) {
  debug('user', user);
  getRepositories(user.gitHubUserName, getRepositoriesCallback);
}

function getRepositories(username, callback) {
  debug('Getting list of repo...');
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

function getRepositoriesCallback(repos) {
  debug('Repos', repos);
}
