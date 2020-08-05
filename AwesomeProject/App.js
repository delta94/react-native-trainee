import React from 'react';
import 'react-native-vector-icons';
import 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import DrawerNavigator from './components/Navigation/DrawerNavigator'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <DrawerNavigator />
        </Provider>
      </>
    );
  }
};

export default App;
