self.addEventListener("push", function(event) {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = {
      title: "雞蛋糕小姐",
      body: "有新的訂單！"
    };
  }

  const title = data.title || "雞蛋糕小姐";
  const options = {
    body: data.body || "有新的訂單！",
    icon: "/chicken-cake-order/logo.jpeg",
    badge: "/chicken-cake-order/logo.jpeg",
    data: {
      url: "/chicken-cake-order/manage.html"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("/chicken-cake-order/manage.html")
  );
});
