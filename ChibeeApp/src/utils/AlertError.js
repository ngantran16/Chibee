import { Alert } from 'react-native';

export function AlertError(data) {
  const error = data.data ? data.data : data;
  Alert.alert('Error', error?.message);
}
