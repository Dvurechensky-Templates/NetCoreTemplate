export class Alerts {
    /**
     * Функция для отображения уведомления
     * 
     * TODO: Сделать синхронизацию уведомления для всех - если она касается размещения задач на сервере
    */
    public AlertShow(notification: Notification): void {
        const container = document.getElementById('notification-container');
        if (!container) return;

        // Создаем новое уведомление
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

        // Добавляем уведомление в контейнер
        container.appendChild(newNotification);
        newNotification.classList.add('puff-in-center');

        // Убираем уведомление после указанного времени
        setTimeout(() => {
            newNotification.remove();
        }, notification.duration * 1000);
    }
}

// Тип для уведомлений
interface Notification {
    text: string;
    duration: number; // продолжительность отображения в секундах
    type: TypeAlert;
}

export enum TypeAlert {
    Error = 'error',
    Warning = 'warning',
    Ok = 'ok',
}