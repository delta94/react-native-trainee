import React, { useState, useContext } from 'react';
import { authenticate } from '../actions';
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

import { AppState } from '../../../reducers';

import { Button, InputItem } from '@ant-design/react-native';
import { Input } from 'react-native-elements';
import SignUp from '../SignUp/SignUp';


interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}
class Login extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        this.props.authenticate(this.state.email, this.state.password);

    }
    navigateToSignUp = () => {

    }

    render() {
        return (
            <>
                <View style={styles.loginLayout}>

                    <View style={styles.loginImageView}>
                        <Image style={styles.loginImage} source={require('../../../assets/images/CatScanBigLogo.png')} />
                    </View>

                    <View style={styles.loginContainer}>


                        <Input
                            placeholder="Enter Email"
                            onChangeText={text => this.setState({ email: text })}
                            defaultValue="auth@au.com"
                            containerStyle={styles.textInput}
                            leftIcon={<Text></Text>}

                        />
                        <Input
                            placeholder='Enter Password'
                            onChangeText={text => this.setState({ password: text })}
                            defaultValue="1qaz@WSX"
                            containerStyle={[styles.textInput, styles.passwordInput]}
                            leftIcon={<Text></Text>}
                            rightIcon={<Text>Forgot?</Text>}

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
            </>
        );
    }
};


const styles = StyleSheet.create({
    scrollView: {

    },
    textInput: {
        height: 70,
        paddingLeft: 20,
        backgroundColor: '#f7f7f7',
        marginTop: 15,
        fontSize: 17,
        borderRadius: 10,

    },
    passwordInput: {
        marginTop: 15,
        marginBottom: 20
    },
    signInButton: {
        height: 60,
        color: 'black',
        backgroundColor: '#ebebeb'
    },
    inputLabel: {
        fontSize: 20
    },
    loginContainer: {
        marginTop: 25,
        margin: 15,
        marginBottom: 30
    },
    line: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },
    loginImage: {
        width: 420,
        height: 400,
        marginTop: 55

    },
    loginImageView: {

    },
    loginLayout: {

    },
    signUpLinksView: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    dontHaveAnAccount: {
        fontSize: 18,
        color: '#a3a3a3',
        margin: 30
    }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        userData: state.auth.userData
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(Login);