## Slack Node
send slack message from node or javascript applications

### Usage

add to your project using Yarn
```shell
yarn add https://github.com/squadlocker/slack-node.git
```

or NPM
```
npm install https://github.com/squadlocker/slack-node.git
```

In your code:
``` javascript
const sn = require('slack-node');
// the class constructor accepts a webhook address this is the webhook associated with slack channel
// and username(this is who the slack message comes from)
//
// Here is how you add a webhook:
// https://get.slack.help/hc/en-us/articles/115005265063-Incoming-WebHooks-for-Slack
const slack = new sn('https://slackwebhook.com/223452345/2345234523', 'my-program');

slack.send('Hey Slack!');
```

