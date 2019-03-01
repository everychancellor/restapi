console.log('Before');
getUser(1, function(user) {
  console.log('user', user);
  getRepositories(user.gitHubUserName, function(repos) {
    console.log('Repos', repos);
  });
});

console.log('After');

function getUser(id, callback) {
  console.log('Reading a user from a database...');
  setTimeout(() => {
    callback({ id, gitHubUserName: 'verychancellor' });
  }, 2000);
}

function getRepositories(username, callback) {
  console.log('getting list of repo');
  setTimeout(() => {
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
