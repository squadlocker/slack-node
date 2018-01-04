const rp = require('request-promise');
const log = require('debug')('slack-node');

module.exports = class Slack {
  constructor(webhook){
    this.webhook = webhook;
  }

  send(message){
    // http options
    const options = {
      method: 'POST',
      url: this.webhook,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body: {'text': message},
      json: true
    };

    rp(options)
    .then(results => {
      log(results);
      return;
    })
    .catch(error => {
      log(error);
      console.error('failed to send to slack', error);
    })
  }
}