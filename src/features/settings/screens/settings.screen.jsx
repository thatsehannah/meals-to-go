import { useContext, useState, useCallback } from 'react';
import { Pressable } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { AuthenticationContext } from '../../../services/auth/auth.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import {
  SettingsItem,
  AvatarContainer,
} from '../components/settings.screen.styles';

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState('');
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePic = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  //triggers whenever the screen is back in focus
  //https://reactnavigation.org/docs/use-focus-effect/
  useFocusEffect(
    useCallback(() => {
      getProfilePic(user);
    }, [user])
  );

  return (
    <SafeAreaContainer>
      <AvatarContainer>
        <Pressable onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon='human'
            />
          ) : (
            <Avatar.Image
              source={{ uri: photo }}
              size={180}
            />
          )}
        </Pressable>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title={`Logged in as ${user.email}`}
          left={(props) => (
            <List.Icon
              {...props}
              color='black'
              icon='account'
            />
          )}
        />
        <SettingsItem
          title='Favorites'
          description='View your favorites'
          onPress={() => navigation.navigate('Favorites')}
          left={(props) => (
            <List.Icon
              {...props}
              color='black'
              icon='heart'
            />
          )}
        />
        <SettingsItem
          title='Log Out'
          onPress={onLogout}
          left={(props) => (
            <List.Icon
              {...props}
              color='black'
              icon='logout'
            />
          )}
        />
      </List.Section>
    </SafeAreaContainer>
  );
};
