import { TransitionPresets } from '@react-navigation/stack';

export const modalOptions = {
  gestureEnabled: true, //need to include this for Android (defaults to false)
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};
