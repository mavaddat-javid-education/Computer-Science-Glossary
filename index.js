// search, auth, fork, commit, pull req
/**
var Client = require('github');
var client = new Client({
  version: '3.0.0'
});
client.repos.getContent({
  user: 'mavaddat',
  repo: 'Computer-Science-Glossary',
  path: 'dict.textile',
  ref: 'master'
}, function(err, res) {
  if (!err) {
    console.log(new Buffer(res.content, 'base64').toString('utf8'));
  }
});
*/
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
