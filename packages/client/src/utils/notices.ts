import { notifications } from '@mantine/notifications';

const success = (message: string) => {
  notifications.show({
    message,
    color: 'green',
  });
};

const error = (message: string) => {
  notifications.show({
    message,
    color: 'red',
  });
};

export default { success, error };
