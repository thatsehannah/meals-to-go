import { useRef } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import styled from 'styled-components/native';

import { Camera, CameraType } from 'expo-camera';
import { CenteredView } from '../../../components/utility/centered-view.component';
import { Text } from '../../../components/typography/text.component';

const ProfileCamera = styled(Camera).attrs({
  type: CameraType.front,
})`
  height: 100%;
  width: 100%;
`;

export const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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

  return <ProfileCamera ref={(camera) => (cameraRef.current = camera)} />;
};
