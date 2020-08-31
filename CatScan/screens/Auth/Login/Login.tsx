import React, { useState, useContext } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

import { AppState } from '../../../reducers';

import { Button, InputItem } from '@ant-design/react-native';
import { Input } from 'react-native-elements';
import SignUp from '../SignUp/SignUp';

import { NavigationProp } from '@react-navigation/native'
import { styles } from './styles'
interface OwnStateProps {
    email: string;
    password: string;
    validationMessage?: string;
}

interface DispatchFromProps {
    login: (email: string, password: string) => void
}

interface StateFromProps {
    validationMessage?: string;
    userNotConfirmed?: boolean;
}
class Login extends React.Component<StateFromProps & DispatchFromProps & any, OwnStateProps> {

    constructor(props: StateFromProps & any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);

    }
    navigateToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }
    navigateToForgotPasswprd = () => {
        this.props.navigation.navigate('ForgotPassword');
    }


    componentDidUpdate(prevProps: StateFromProps, prevState: any) {

        if (!prevProps.userNotConfirmed && this.props.userNotConfirmed) {
            this.props.navigation.navigate('ConfirmUser');
        }
    }

    render() {
        return (
            <>
                <ScrollView >
                    <View style={styles.loginLayout}>

                        <View style={styles.loginImageView}>
                            <Image style={styles.loginImage} source={require('../../../assets/images/CatScanBigLogo.png')} />
                        </View>

                        <View style={styles.loginContainer}>

                            <Text style={{ color: 'red' }}>{this.props.validationMessage}</Text>

                            <Input
                                placeholder="Enter Email"
                                onChangeText={text => this.setState({ email: text })}
                                //defaultValue="auth@au.com"
                                containerStyle={styles.textInput}
                                leftIcon={<Text></Text>}
                                inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                            />
                            <Input
                                placeholder='Enter Password'
                                onChangeText={text => this.setState({ password: text })}
                                //defaultValue="1qaz@WSX"
                                containerStyle={[styles.textInput, styles.passwordInput]}
                                leftIcon={<Text></Text>}
                                rightIcon={<Text onPress={this.navigateToForgotPasswprd}>Forgot?</Text>}
                                inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                            />

                            <Button onPress={this.onSubmit} style={styles.signInButton}>
                                <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
                            </Button>

                        </View>

                        <View style={styles.line} />

                        <View style={styles.signUpLinksView}>
                            <Text style={styles.dontHaveAnAccount} onPress={this.navigateToSignUp}>Don't have an account?</Text>
                            <Text style={{ fontSize: 18 }} onPress={this.navigateToSignUp}>Sign Up</Text>
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
};



const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        validationMessage: state.auth.validationMessage,
        userNotConfirmed: state.auth.userNotConfirmed
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    login
})(Login);