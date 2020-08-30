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

import { Input, Button } from 'react-native-elements';
import { logout } from '../Auth/actions';


interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {
    logout: () => void;
}

interface StateFromProps {

}
class Settings extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    onEditProfile = () => { 
        this.props.navigation.navigate('EditProfile');
    }
    onLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <>
                <View style={styles.mainContainer}>
                    <Text>Settings Screen</Text>
                    <Button onPress={this.onLogout} title='Logout'></Button>
                    <Button onPress={this.onEditProfile} title='EditProfile'></Button>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 100
    },
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    logout
})(Settings);