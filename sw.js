self.addEventListener('push', (e) => {
      var options = {
            body: 'This notification was generated from a push!',
            icon: 'https://avatars0.githubusercontent.com/u/50532579?s=460&u=c482b9250dd38cfa1276617e7dc776cfee61116d&v=4',
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: '2'
            },
            actions: [
              {action: 'explore', title: 'Explore this new world', icon: './icon.png'},
              {action: 'close', title: 'Close',  icon: './icon.png'},
            ]
      }
      e.waitUntil(
            self.registration.showNotification('Hello world!', options)
      )
})