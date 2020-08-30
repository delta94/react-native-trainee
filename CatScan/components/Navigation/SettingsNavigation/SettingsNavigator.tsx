import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../../screens/Settings/Settings';
import EditProfile from '../../../screens/Settings/EditProfile/EditProfile';


const Stack = createStackNavigator();

const SettingsNavigator = () => {
    return (
        
            <Stack.Navigator
                initialRouteName='Settings'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />

            </Stack.Navigator>
    );
}

export default SettingsNavigator;