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
import { Input, Header } from 'react-native-elements';


interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}
class ForgotPassword extends React.Component<any & any & any, OwnStateProps> {
    static title: string = "Forgot Password?";
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
                <View style={styles.forgotPasswordLayout}>

                    <View style={styles.logoImageView}>
                        <Image style={styles.logoImage} source={require('../../../assets/images/CatScanBigLogo.png')} />
                    </View>

                    <View style={styles.header}>
                        <>
                            <Text style={styles.headerText}>{ForgotPassword.title}</Text>
                        </>
                    </View>
                    <View style={styles.pageDescriptionView}>
                        <Text style={styles.pageDescription}>Lorem ipsum dolor sit amt, Ipsum dolor sit amt, ipsum dolor sit amt, consectetur</Text>
                    </View>

                    <View style={styles.forgotContainer}>


                        <Input
                            placeholder="Email"
                            onChangeText={text => this.setState({ email: text })}
                            defaultValue="auth@au.com"
                            containerStyle={styles.textInput}
                            leftIcon={<Text></Text>}

                        />

                        <Button onPress={this.onSubmit} style={styles.restorePasswordButton}>
                            <Text style={{ fontWeight : 'bold'}}>Restore password</Text>
                            </Button>

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
    forgotContainer: {
        marginTop: 25,
        margin: 15,
        marginBottom: 30
    },
    line: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },
    logoImage: {
        width: 420,
        height: 400,
        marginTop: 55

    },
    logoImageView: {

    },
    forgotPasswordLayout: {

    },
    signUpLinksView: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    dontHaveAnAccount: {
        fontSize: 18,
        color: '#a3a3a3',
        margin: 30
    },
    header: {
        backgroundColor: 'white',
        marginTop: 25,
        marginLeft: 20

    },
    headerText: {
        fontSize: 23,
        fontWeight : 'bold'
    },
    pageDescriptionView: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageDescription: {
        margin: 20

    },
    restorePasswordButton : {
        marginTop : 125,
        height: 60,
        color: 'black',
        backgroundColor: '#ebebeb',
       
    }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        userData: state.auth.userData
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(ForgotPassword);