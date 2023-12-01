import { useContext } from 'react';
import { Pressable } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { AuthenticationContext } from '../../../services/auth/auth.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import {
  SettingsItem,
  AvatarContainer,
} from '../components/settings.screen.styles';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeAreaContainer>
      <AvatarContainer>
        <Pressable onPress={() => navigation.navigate('Camera')}>
          <Avatar.Icon
            size={180}
            icon='human'
          />
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
