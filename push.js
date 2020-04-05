var push = require('web-push')

let vapID = {
      publicKey: 'BOMYBgUNUJ2HVE6TJpcZ56pTTVWe9qKVRxpgeLM5OKSt_udzZmczDjKkNQA1Dbmz5t_v6Iz3jLpplSufqviaC_U',
      privateKey: 'ExCDMW1H0VXjnB2QnscF-caj4A3uEr8Lunb2fBBb1iU'
}

push.setVapidDetails('wisdomanaba83@gmail.com', vapID.publicKey, vapID.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dLe_EDNbaEc:APA91bGXxF0-pGoPav1bUB2tdPL9TvjdP6Xi4Am8laqOzjF2dpwVBonXByekKHOmjMhYhpwoAHvRR15HSC7sDbjLufJMzPFwpNUOW3Ld2F_DVkcAnKTYk6_xUd4i9bxXVWjqRzcU3bOm","expirationTime":null,"keys":{"p256dh":"BFiTG7dMS0zvzjBcqPTERkSkoR_y9jWYnG2W4z_rGCS5p7RnsKF2MAjghDRSZstg75lWPJRl9c0AIqOMIWLYyFc","auth":"em2hK9oPoQ4ZCHGfwbn1XQ"}}

push.sendNotification(sub, 'test message')