import { addNotification } from 'reapop';

export const defaultNotification = {
    position: 'br',
    dismissible: true,
    dismissAfter: 3000,
    closeButton: true,
    allowHTML: false,
};

export const errorNotification = (title, error) => addNotification({
    title,
    message: error,
    status: 'error',
});

export const successNotification = (title, message) => addNotification({
    title,
    message,
    status: 'success',
});
