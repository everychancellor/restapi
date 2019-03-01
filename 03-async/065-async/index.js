console.log('Before');
const user = getUser(1);
console.log(user);

console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    return { id, gitHubUserName: 'verychancellor' };
  }, 2000);
}
