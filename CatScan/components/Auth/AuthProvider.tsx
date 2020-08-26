import React from 'react';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
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
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../Navigation/AuthNavigator/AuthNavigator';
import { checkAuthorization } from '../../screens/Auth/actions';
interface OwnStateProps {

}


interface DispatchFromProps {
    checkAuthorization: () => void;
}

interface StateFromProps {
    isAuthorized?: boolean
}


class AuthProvider extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.checkAuthorization();
    }
    render() {

        const auth = (<NavigationContainer><AuthNavigator /></NavigationContainer>);

        return this.props.isAuthorized ? this.props.children : auth;
    }
};

const styles = StyleSheet.create({
    logoutContainer: {

    },
    logoutButton: {
        marginTop: 100
    }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        isAuthorized: state.auth.isAuthorized
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    checkAuthorization
})(AuthProvider);