

import React from 'react';
import { View } from 'react-native';
import {

} from 'react-native';

import SignUp from './screens/Auth/SignUp/SignUp';
import Login from './screens/Auth/Login/Login';
import Status from './components/Auth/Status/Status';
import Logout from './components/Auth/Logout/Logout'
//import ForgotPassword from './screens/Auth'

import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


const App = () => {


  return (
    <>
      <Provider store={store}>
        <View>

          {/* <Status /> */}

          {/* <Login /> */}

          {/* <SignUp />  */}

          {/* <Logout />  */}
          {/* <ForgotPassword /> */}
        </View>
      </Provider>
    </>
  );
};


export default App;
