import { initializeApp, getApps } from 'firebase/app';
import {
  signInWithEmailAndPassword,
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../../../firebaseConfig';

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const auth = getAuth(app);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
