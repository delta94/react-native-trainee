import React from 'react';
import 'react-native-vector-icons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';
import 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductFeed from './screens/ProductFeed/ProductFeed';
import ManagerProductFeed from './screens/ManagerProductFeed/ManagerProductFeed';



//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const someData = {};

class App extends React.Component {



  render() {


    return (
      <>
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

          </Drawer.Navigator>
        </NavigationContainer>
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
