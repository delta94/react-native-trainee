

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

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {


  return (
    <>
      <Provider store={store}>

        <NavigationContainer>

          {/* <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          </Stack.Navigator> */}

          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {

                color = focused ? 'red' : color;

                if (route.name === 'Home') {
                  return <SimpleLineIcons name={'home'} size={size} color={color} />;
                }
                if (route.name === 'Search') {
                  return <Octicons name={'search'} size={size} color={color} />;
                }
                if (route.name === 'Settings') {
                  return <Feather name={'settings'} size={size} color={color} />;
                }
                if (route.name === 'BlueButton') {
                  return <FontAwesome5 name={'football-ball'} size={size} color={'blue'} />;
                }
                if (route.name === 'Car') {
                  return <FontAwesome name={'car'} size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray'
            }}
            initialRouteName="Home"
          >
            <Tab.Screen name="Home" component={Login} />
            <Tab.Screen name="Search" component={Login} />
            <Tab.Screen name="BlueButton" component={Login} />
            <Tab.Screen name="Car" component={Login} />
            <Tab.Screen name="Settings" component={Login} />

          </Tab.Navigator>

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
