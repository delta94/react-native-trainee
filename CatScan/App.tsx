

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';


import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import AppNavigator from './components/Navigation/AppNavigator/AppNavigator';
import AuthProvider from './components/Auth/AuthProvider';


const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {


  return (
    <>
      <Provider store={store}>

        {/* <Navigation /> */}

        {/* <Status /> */}
  
        {/* <Login /> */}

        {/* <SignUp />  */}

        {/* <Logout />  */}
        {/* <ForgotPassword /> */}
        <AuthProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </>
  );
};


export default App;
