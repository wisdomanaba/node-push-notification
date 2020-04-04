self.addEventListener('push', () => {
      self.registration.showNotification('Hello Wisdom', {
            body: "Notified by Traversy Media!",
            icon: "http://image.ibb.co/frYOFd/tmlogo.png"
      })
})