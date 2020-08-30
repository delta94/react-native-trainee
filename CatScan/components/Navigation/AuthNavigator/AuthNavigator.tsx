import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button, InputItem } from '@ant-design/react-native';
import { Input } from 'react-native-elements';
import SignUp from '../../../screens/Auth/SignUp/SignUp';
import Login from '../../../screens/Auth/Login/Login';
import Logout from '../../../components/Auth/Logout/Logout'
import ForgotPassword from '../../../screens/Auth/ForgotPassword/ForgotPasword';
import Home from '../../../screens/Home/Home';
import Settings from '../../../screens/Settings/Settings';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ConfirmUser from '../../../screens/Auth/ConfirmUser/ConfirmUser';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (

    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmUser" component={ConfirmUser} />

    </Stack.Navigator>
  );
}

export default AuthNavigator;