import React from 'react';
import { Auth } from 'aws-amplify';

import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Alert,
    Image

} from 'react-native';

import { AppState } from '../../reducers';

import { InputItem } from '@ant-design/react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './styles';


interface OwnStateProps {

}


interface DispatchFromProps {

}

interface StateFromProps {

}
class Home extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
       
        }
    }


    render() {
        return (
            <>
                <View style={styles.mainContainer}>
                    <Text>Home Screen</Text>
                </View>
            </>
        );
    }
};




const mapStateToProps = (state: AppState): StateFromProps => {
    return {
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(Home);