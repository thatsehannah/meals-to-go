import { useContext } from 'react';
import { List } from 'react-native-paper';
import { AuthenticationContext } from '../../../services/auth/auth.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeAreaContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title={`Logged in as ${user.email}`}
          left={(props) => (
            <List.Icon
              {...props}
              color='black'
              icon='account'
            />
          )}
        />
        <List.Item
          style={{ padding: 16 }}
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
        <List.Item
          style={{ padding: 16 }}
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
