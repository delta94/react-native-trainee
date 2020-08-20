

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

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

const App = () => {


  return (
    <>
      <Provider store={store}>

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          </Stack.Navigator>
        </NavigationContainer>
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
