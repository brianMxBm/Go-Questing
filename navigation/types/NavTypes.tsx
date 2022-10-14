import HomeScreen from '../../assets/screens/HomeScreen';
import FeedScreen from '../../assets/screens/PostJobScreen';
import JobDetailScreen from '../../assets/screens/JobDetailScreen';
import JobFeedScreen from '../../assets/screens/JobFeedScreen';
import ForgotPasswordOTPScreen from '../../assets/screens/ForgotPasswordScreen';
import MessageScreen from '../../assets/screens/MessageScreen';
import MapScreen from '../../assets/screens/MapScreen';
import VerificationScreen from '../../assets/screens/VerificationScreen';
import QuestScreen from '../../assets/screens/QuestScreen';
import TutorialScreen from '../../assets/screens/TutorialScreen';
import LoginScreen from '../../assets/screens/LoginScreen';
import RegisterScreen from '../../assets/screens/RegisterScreen';
import ProfileScreen from '../../assets/screens/ProfileScreen';
import Tabs from '../Tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PostJobScreen from '../../assets/screens/PostJobScreen';

/**
 * Define every single screen that takes in a prop here, it's easy to maintain all in a single locaiton.
 */
type ParamListTypes = {
  Verification: {
    phoneNumber: string;
  };
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
};

/**
 * Place screens that are present in the RootStack Navigator here.
 */
export const ROOT_SCREENS = {
  Home: {
    //NOTE: home is the Route Name
    component: HomeScreen //TODO: Remove Screen, it's redundant.
  },
  Feed: {
    component: JobFeedScreen //TODO: Remove Screen, it's redundant.
  },
  Forgot: {
    component: ForgotPasswordOTPScreen //TODO: Remove Screen, it's redundant.
  },
  Message: {
    component: MessageScreen //TODO: Remove Screen, it's redundant.
  },
  Quest: {
    component: QuestScreen //TODO: Remove Screen, it's redundant.
  },
  Tutorial: {
    component: TutorialScreen //TODO: Remove Screen, it's redundant.
  },
  Login: {
    component: LoginScreen //TODO: Remove Screen, it's redundant.
  },
  Register: {
    component: RegisterScreen //TODO: Remove Screen, it's redundant.
  },
  Profile: {
    compoennt: ProfileScreen //TODO: Remove Screen, it's redundant.
  },
  Job: {
    component: JobFeedScreen
  },
  Tabs: {
    compoennt: Tabs
  },
  Verification: {
    component: VerificationScreen
  }
};

/**
 * Place screens that are present in the BottomTab Navigator here.
 */
export const TAB_SCREENS = {
  Quest: {
    component: QuestScreen
  },
  Message: {
    component: MessageScreen
  },
  Profile: {
    component: ProfileScreen
  },
  Map: {
    component: MapScreen
  },
  Feed: {
    component: PostJobScreen
  },
  Details: {
    component: JobDetailScreen
  }
};

/**
 * This is a mapped type that generates the BottomParamList.
 * It includes the screens that do have props and generalizes the ones that don't (undefined)
 */
export type BottomStackParamList = {
  [P in Exclude<keyof typeof TAB_SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

/**
 * This is a mapped type that generates the RootStackParamList.
 * It includes the screens that do have props and generalizes the ones that don't (undefined)
 */
export type HomeStackParamList = {
  [P in Exclude<keyof typeof ROOT_SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

//TODO: Refactor with mapped types.
export type TutorialScreenNavigationProp = NativeStackScreenProps<HomeStackParamList, 'Tutorial'>;

export type RegisterScreenNavigationProp = NativeStackScreenProps<HomeStackParamList, 'Register'>;

export type LoginScreenNavigationProp = NativeStackScreenProps<HomeStackParamList, 'Login'>;

export type JobDetailScreenNavigationProp = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export type JobFeedScreenNavigationProp = NativeStackScreenProps<HomeStackParamList, 'Feed'>;

export type ForgotPassowrdScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'Forgot'
>;

export type VerificationScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'Verification'
>;
