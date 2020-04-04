var push = require('web-push')

let vapID = {
      publicKey: 'BOMYBgUNUJ2HVE6TJpcZ56pTTVWe9qKVRxpgeLM5OKSt_udzZmczDjKkNQA1Dbmz5t_v6Iz3jLpplSufqviaC_U',
      privateKey: 'ExCDMW1H0VXjnB2QnscF-caj4A3uEr8Lunb2fBBb1iU'
}

push.setVapidDetails('mailto:example@ff.com', vapID.publicKey, vapID.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')