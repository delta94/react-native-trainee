import React, { useState, useContext } from 'react';
import { forgotPassword, forgotPasswordSubmit, clearAllStates } from '../actions';
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

import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
interface OwnStateProps {
    email?: string;
    confirmationCode?: string;
    newPassword?: string;
    repeatPassword?: string;
}

interface DispatchFromProps {
    forgotPassword: (email: string) => void;
    forgotPasswordSubmit: (email: string, confirmationCode: string, newPassword: string) => void;
    clearAllStates: () => void;
}

interface StateFromProps {
    validationMessage?: string;
    isForgotPasswordActive?: boolean;
    isPasswordChanged?: boolean;
    userName?: string;
}
class ForgotPassword extends React.Component<DispatchFromProps & StateFromProps & any, OwnStateProps> {
    static title: string = "Forgot Password?";
    constructor(props: DispatchFromProps & StateFromProps & any) {
        super(props);

        this.state = {
        }
    }

    onSubmit = (event: any) => {
        this.props.forgotPassword(this.state.email);

    }

    onConfirmRestorePassword = () => {
        this.props.forgotPasswordSubmit(this.props.userName, this.state.confirmationCode, this.state.newPassword);
    }

    componentDidUpdate(prevProps: StateFromProps) {

        if (this.props.isPasswordChanged && !prevProps.isPasswordChanged) {
            this.props.navigation.navigate('Login');
        }

    }
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.forgotPasswordLayout}>

                        <View style={styles.logoImageView}>
                            <Image style={styles.logoImage} source={require('../../../assets/images/CatScanBigLogo.png')} />
                        </View>

                        <Text style={{ color: 'red' }}>{this.props.validationMessage}</Text>

                        <View style={styles.header}>

                            <MaterialIconsIcon
                                name="arrow-back"
                                color="black"
                                size={25}
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.goBackIcon}
                            />
                            <Text style={styles.headerText}>{ForgotPassword.title}</Text>

                        </View>

                        <View style={styles.pageDescriptionView}>
                            <Text style={styles.pageDescription}>Lorem ipsum dolor sit amt, Ipsum dolor sit amt, ipsum dolor sit amt, consectetur</Text>
                        </View>

                        <View style={styles.forgotContainer}>


                            {!this.props.isForgotPasswordActive ?
                                <>
                                    <Input
                                        placeholder="Enter Email"
                                        onChangeText={text => this.setState({ email: text })}
                                        containerStyle={styles.textInput}
                                        leftIcon={<Text></Text>}
                                        inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                                    />

                                    <Button onPress={this.onSubmit} style={styles.restorePasswordButton}>
                                        <Text style={{ fontWeight: 'bold' }}>Restore password</Text>
                                    </Button>
                                </>
                                :
                                <>
                                    <View style={styles.userInfo}>
                                        <Text style={{ fontWeight: 'bold' }}>{`Changing password for: ${this.props.userName}`}</Text>
                                        <IoniconsIcon
                                            name='close'
                                            size={20}
                                            color='red'
                                            onPress={() => this.props.clearAllStates()} />
                                    </View>

                                    <Input
                                        placeholder="Enter Confirmation Code"
                                        onChangeText={text => this.setState({ confirmationCode: text })}
                                        containerStyle={styles.textInput}
                                        leftIcon={<Text></Text>}
                                        inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                                    />
                                    <Input
                                        placeholder="Enter New Password"
                                        onChangeText={text => this.setState({ newPassword: text })}
                                        containerStyle={styles.textInput}
                                        leftIcon={<Text></Text>}
                                        inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                                    />
                                    <Input
                                        placeholder="Repeat New Password"
                                        onChangeText={text => this.setState({ repeatPassword: text })}
                                        containerStyle={styles.textInput}
                                        leftIcon={<Text></Text>}
                                        inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                                    />

                                    <Button onPress={this.onConfirmRestorePassword} style={styles.confirmRestorePasswordButton}>
                                        <Text style={{ fontWeight: 'bold' }}>Confirm restore password</Text>
                                    </Button>
                                </>}

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
        isForgotPasswordActive: state.auth.isForgotPasswordActive,
        isPasswordChanged: state.auth.isPasswordChanged,
        userName: state.auth.userName
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    forgotPassword,
    forgotPasswordSubmit,
    clearAllStates
})(ForgotPassword);