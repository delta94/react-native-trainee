

import React from 'react';
import { View, Text } from 'react-native';
import {

} from 'react-native';

import SignUp from './screens/Auth/SignUp/SignUp';
import Login from './screens/Auth/Login/Login';
import Status from './components/Auth/Status/Status';
import Logout from './components/Auth/Logout/Logout'
import ForgotPassword from './screens/Auth/ForgotPassword/ForgotPasword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MainLayout from './components/MainLayout/MainLayout';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {


  return (
    <>
      <Provider store={store}>

        <MainLayout />
        {/* <Status /> */}

        {/* <Login /> */}

        {/* <SignUp />  */}

        {/* <Logout />  */}
        {/* <ForgotPassword /> */}

      </Provider>
    </>
  );
};


export default App;
