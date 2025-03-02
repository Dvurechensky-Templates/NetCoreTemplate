export class Alerts {
    AlertShow(notification) {
        const container = document.getElementById('notification-container');
        if (!container)
            return;
        const newNotification = document.createElement('div');
        newNotification.classList.add('notification');
        switch (notification.type) {
            case TypeAlert.Error:
                newNotification.classList.add('error_alert_animate');
                break;
            case TypeAlert.Ok:
                newNotification.classList.add('ok_alert_animate');
                break;
            case TypeAlert.Warning:
                newNotification.classList.add('warning_alert_animate');
                break;
        }
        newNotification.textContent = notification.text;
        container.appendChild(newNotification);
        newNotification.classList.add('puff-in-center');
        setTimeout(() => {
            newNotification.remove();
        }, notification.duration * 1000);
    }
}
export var TypeAlert;
(function (TypeAlert) {
    TypeAlert["Error"] = "error";
    TypeAlert["Warning"] = "warning";
    TypeAlert["Ok"] = "ok";
})(TypeAlert || (TypeAlert = {}));
//# sourceMappingURL=alerts.js.map