import type {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Tutorial: undefined;
  Register: undefined;
  Login: undefined;
  Tabs: undefined;
  Home: undefined;
  Profile: undefined;
  Feed: undefined;
  Map: undefined;
  Details: {
    item: {
      key: string;
      subType: string;
      color: string;
      fullColor: string;
      description: string;
      pay: string;
      type: string;
      image: string;
    };
  };
  Forgot: undefined;
  Verification: {
    phoneNumber: string;
  };
};

export type TutorialScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Tutorial'
>;

export type RegisterScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Register'
>;

export type LoginScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Login'
>;

export type JobDetailScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Details'
>;

export type JobFeedScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type ForgotPassowrdScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Forgot'
>;
