import { useContext } from 'react';
import { Text } from 'react-native';

import { AuthenticationContext } from '../../../services/auth/auth.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthButton } from '../../account/components/account.styles';

export const SettingsScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Current user: {user.email}</Text>
      <Spacer />
      <AuthButton onPress={() => onLogout()}>Logout</AuthButton>
    </SafeAreaContainer>
  );
};
