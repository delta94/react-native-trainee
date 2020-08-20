import React from 'react';

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

import { Button, InputItem } from '@ant-design/react-native';
import { Input } from 'react-native-elements';



interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}
class Home extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onLogout = (event: any) => {
        event.preventDefault();
        //clear

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


const styles = StyleSheet.create({
    mainContainer: {
        marginTop : 100
    },
  
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        userData: state.auth.userData
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(Home);