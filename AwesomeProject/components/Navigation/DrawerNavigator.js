
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductFeed from '../../screens/Product/ProductFeed/ProductFeed';
import ManagerProductFeed from '../../screens/Product/ManagerProductFeed/ManagerProductFeed';
import ProductDetails from '../../screens/Product/ProductDetails/ProductDetails';
import { styles } from './styles'

const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <>
                <NavigationContainer>
                    <Drawer.Navigator
                        initialRouteName="ProductFeed"
                        drawerContentOptions={{
                            activeTintColor: '#ac37b6',
                            itemStyle: styles.drawerItem
                        }}
                    >
                        
                        <Drawer.Screen name="My Shop" component={ProductFeed} />
                        <Drawer.Screen name="Your Products" component={ManagerProductFeed} />
                        <Drawer.Screen name="ProductDetails" component={ProductDetails} options={{ drawerLabel: '' }} />

                    </Drawer.Navigator>
                </NavigationContainer>
            </>
        );
    }
}

export default DrawerNavigator;
