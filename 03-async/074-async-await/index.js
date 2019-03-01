const debug = require('debug')('app:startup');
console.log('Before');

run();

async function run() {
  try {
    const user = await getUser(1);
    console.log('user', user);
    const repos = await getRepositories(user);
    console.log('repos', repos);
  } catch (err) {
    console.log('Error', err.message);
  }
}

console.log('After');

function getUser(id) {
  debug('Reading a user from a database...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, gitHubUserName: 'verychancellor' });
      //reject(new Error('Could not get the usery'));
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
