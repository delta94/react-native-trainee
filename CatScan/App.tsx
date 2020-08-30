

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import AppNavigator from './components/Navigation/AppNavigator/AppNavigator';
import AuthProvider from './components/Auth/AuthProvider';
import Amplify from 'aws-amplify';
import awsconfig from './configs/aws-exports';
import SplashProvider from './screens/Splash/SplashProvider/SplashProvider';

Amplify.configure(awsconfig);

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends React.Component {

  state = {

  }

  render() {
    return (
      <>
        <Provider store={store}>

          {/* <Navigation /> */}

          {/* <Login /> */}

          {/* <SignUp />  */}

          {/* <Logout />  */}
          {/* <ForgotPassword /> */}

          <SplashProvider>
            <AuthProvider>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </AuthProvider>
          </SplashProvider>
        </Provider>
      </>
    );
  }
};


export default App;
