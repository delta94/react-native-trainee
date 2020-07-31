import React from 'react';
import  'react-native-vector-icons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductFeed from './screens/ProductFeed/ProductFeed';
import ManagerProductFeed from './screens/ManagerProductFeed/ManagerProductFeed';
import { Header } from 'react-native-elements';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const someData = {};

class App extends React.Component {



  render() {


    return (
      <>
        <NavigationContainer>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Drawer.Navigator
            initialRouteName="ProductFeed"
            drawerStyle={{
              //backgroundColor: '',
              //width: 240,
            }}
          >
            <Drawer.Screen name="ProductFeed"  >
              {props => <ProductFeed {...props} extraData={someData} />}
            </Drawer.Screen>
            <Drawer.Screen
              name="ManagerProductFeed"
              component={ManagerProductFeed}

            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  }
});

export default App;
