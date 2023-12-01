import { useRef, useContext } from 'react';
import { View, Pressable } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, CameraType } from 'expo-camera';

import { CenteredView } from '../../../components/utility/centered-view.component';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/auth/auth.context';

const ProfileCamera = styled(Camera).attrs({
  type: CameraType.front,
})`
  height: 100%;
  width: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return (
      <CenteredView>
        <ActivityIndicator
          size={50}
          animating={true}
          color='#0000ff'
        />
      </CenteredView>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>We need your permission to show the camera</Text>
        <Button
          mode='contained'
          onPress={requestPermission}
        >
          Grant Permission
        </Button>
      </View>
    );
  }

  return (
    <Pressable onPress={snap}>
      <ProfileCamera ref={(camera) => (cameraRef.current = camera)} />
    </Pressable>
  );
};
