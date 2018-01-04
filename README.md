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
const slack = new sn('https://slackwebhook.com/223452345/2345234523');

slack.send('Hey Slack!');
```

