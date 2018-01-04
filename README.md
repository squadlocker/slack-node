## Slack Node
send slack message from node or javascript applications

### Usage

```shell
yarn add https://github.com/squadlocker/slack-node.git
```

``` javascript
const sn = require('slack-node');
const slack = new sn('https://slackwebhook.com/223452345/2345234523');

slack.send('Hey Slack!');
```

