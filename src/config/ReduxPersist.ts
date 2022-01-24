import AsyncStorage from '@react-native-async-storage/async-storage';

const ReduxPersist = {
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [],
  },
};

export default ReduxPersist;