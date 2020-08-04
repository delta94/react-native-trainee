import React from 'react';
import 'react-native-vector-icons';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductFeed from './screens/ProductFeed/ProductFeed/ProductFeed';
import ManagerProductFeed from './screens/ManagerProductFeed/ManagerProductFeed';
import ProductDetails from './screens/ProductDetails/ProductDetails';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

class Hidden extends React.Component {
  render() {
    return null;
  }
}
const hidden = <Hidden />;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const someData = {};

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationContainer>

            <Drawer.Navigator
              initialRouteName="ProductFeed"
              drawerStyle={{
                //
              }}
              drawerContentOptions={{
                activeTintColor: '#ac37b6',
                itemStyle: { marginVertical: 5 },
              }}
            >
              <Drawer.Screen name="My Shop"  >
                {props => <ProductFeed {...props} extraData={someData} />}
              </Drawer.Screen>

              <Drawer.Screen name="Your Products" component={ManagerProductFeed} />
              <Drawer.Screen name="ProductDetails" component={ProductDetails} options={{ drawerLabel: ''}} />

            </Drawer.Navigator>
          </NavigationContainer>
        </Provider>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white
  }
});

export default App;
