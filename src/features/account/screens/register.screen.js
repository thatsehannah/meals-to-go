import { useContext, useState } from 'react';

import { AuthenticationContext } from '../../../services/auth/auth.context';
import {
  AccountBackground,
  AuthTextInput,
  AuthButton,
  AccountCover,
  AccountContainer,
  Title,
  ErrorContainer,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { error, onRegister } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthTextInput
          mode='outlined'
          label='Email'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(value) => setEmail(value)}
        />
        <Spacer
          size='large'
          position='top'
        />
        <AuthTextInput
          mode='outlined'
          label='Password'
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer
          size='large'
          position='top'
        />
        <AuthTextInput
          mode='outlined'
          label='Repeat Password'
          value={repeatedPassword}
          textContentType='password'
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(value) => setRepeatedPassword(value)}
        />
        <Spacer
          size='large'
          position='top'
        />
        {error && (
          <>
            <ErrorContainer>
              <Text variant='error'>{error}</Text>
            </ErrorContainer>
            <Spacer
              size='large'
              position='top'
            />
          </>
        )}
        <AuthButton
          icon='email'
          mode='contained'
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
      </AccountContainer>
      <Spacer size='large' />
      <AuthButton
        mode='contained'
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};
