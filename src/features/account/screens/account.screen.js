import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationContainer,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationContainer>
        <LottieView
          autoPlay
          loop
          resizeMode='cover'
          style={{ width: '100%', height: '100%' }}
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationContainer>

      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer
          position='top'
          size='large'
        />
        <AuthButton
          icon='email'
          mode='contained'
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
