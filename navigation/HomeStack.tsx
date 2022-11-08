import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types/NavTypes';
import HomeScreen from '../assets/screens/HomeScreen';
import MapScreen from '../assets/screens/MapScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
import FeedScreen from '../assets/screens/PostJobScreen';
import RegisterScreen from '../assets/screens/RegisterScreen';
import LoginScreen from '../assets/screens/LoginScreen';
import ForgotPasswordOTPScreen from '../assets/screens/ForgotPasswordScreen';
import VerificationScreen from '../assets/screens/VerificationScreen';
import JobFeedScreen from '../assets/screens/JobFeedScreen';
import JobDetailScreen from '../assets/screens/JobDetailScreen';
import Tabs from './Tabs';
import { useAppSelector } from '../app/hooks';

// *********** BEGIN TUTORAL SCREEN CODE ***********
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import TutorialScreen from '../assets/screens/TutorialScreen';

// TODO: Implement With Redux.
// const [viewed, setViewed] = useState(false);
// const getAsyncStorageItems = async () => {
//   try {
//     const tutorialViewed = await AsyncStorage.getItem('@TutorialViewed');
//     if (tutorialViewed) {
//       setViewed(true);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// const clearAsyncStorage = async () => {
//   AsyncStorage.clear();
// };

// if (!viewed) {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}>
//       <HomeStack.Screen name="Register" component={RegisterScreen} />
//       <HomeStack.Screen name="Login" component={LoginScreen} />
//       <HomeStack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
//       <HomeStack.Screen name="Verification" component={VerificationScreen} />
//       <HomeStack.Screen name="Tabs" component={Tabs} />
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Profile" component={ProfileScreen} />
//       <HomeStack.Screen name="Details" component={JobDetailScreen} />
//     </HomeStack.Navigator>
//   );
// }

// useEffect(() => {
//   // clearAsyncStorage();
//   // getAsyncStorageItems();
// }, []);
// *********** END TUTORAL SCREEN CODE ***********

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (isLoggedIn) {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Tabs" component={Tabs} />
        <HomeStack.Screen name="Map" component={MapScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
        <HomeStack.Screen name="Feed" component={FeedScreen} />
        <HomeStack.Screen name="JobFeed" component={JobFeedScreen} />
        <HomeStack.Screen name="JobDetail" component={JobDetailScreen} />
      </HomeStack.Navigator>
    );
  }

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Register" component={RegisterScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
      <HomeStack.Screen name="Verification" component={VerificationScreen} />
      <HomeStack.Screen name="Tabs" component={Tabs} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Details" component={JobDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
