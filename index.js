'use strict';

const rp = require('request-promise');
const log = require('debug')('slack-node');

module.exports = class Slack {
  constructor(webhook, from){
    this.webhook = webhook;
    this.from = from || 'slack-node';
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
      body: {
        'text': message,
        'username': this.from
      },
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