/**
 * @format
 */
//import Amplify from 'aws-amplify'
//import config from './aws-exports'
//import { AsyncStorage } from 'react-native';
//import { withAuthenticator } from 'aws-amplify-react-native';

//const myStorage = AsyncStorage;

// Amplify.configure({
//     Auth : {
       
//         userPoolId: 'us-east-2_ptUnqyQd9',
//         userPoolWebClientId: '7i3jmp1q5vq9ftq9jcjgchv1bp',
//         storage: myStorage
       
//     }
// })


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


