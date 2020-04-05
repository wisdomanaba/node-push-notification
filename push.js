var push = require('web-push')

let vapID = {
      publicKey: 'BOMYBgUNUJ2HVE6TJpcZ56pTTVWe9qKVRxpgeLM5OKSt_udzZmczDjKkNQA1Dbmz5t_v6Iz3jLpplSufqviaC_U',
      privateKey: 'ExCDMW1H0VXjnB2QnscF-caj4A3uEr8Lunb2fBBb1iU'
}

push.setVapidDetails('mailto:example@ff.com', vapID.publicKey, vapID.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fdahsj1Y4Bs:APA91bHxjYpV2wPIxv5nmsmM4_qZaqgaEyyYJHFjnf7dR2wbBIrcZXyhhKbLg-RxxHU1JdyXdr-GGYMvQQ_XM-oaN4JY82MsCFMeyDF1vcfweD7c3VEXyX-aLnsONFyrjaZKcgyulu1U","expirationTime":null,"keys":{"p256dh":"BKTvxy_KHBBESA6gUaDRjHRmUy2QSLQ1AsaJprdgcF42UJyS2eppWQGewYYMwbrXaqyyIitUwVUAimJdk1acZ-4","auth":"CkRIf35CKFSu6PURIrHxRg"}}

// let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fbmSn9k5Bck:APA91bGbi7raBzBKuYf308omwJToYoM4EidaD9YDMaWOSwwtJxAgSNxxmx6hsIDzD1kWexxOYhJGGCdX_6b24KLHuWDsqYwVqk-Krus8nPEvHjOMdc4IZLDKFkjLqoY-OCTptLTM7MVp","expirationTime":null,"keys":{"p256dh":"BH3BIc043IC7eNKzahng87djfWXnmoc-4xjU9dVWeRKmVdHsUVG5KaDMR_LjGpSnrX6h6W_rdNj1qTT-z2us0eM","auth":"2Bi88gX72SkaDBvF4VIxxA"}}

push.sendNotification(sub, 'test message')