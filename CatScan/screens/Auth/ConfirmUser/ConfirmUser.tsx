import React from 'react';
import { confirmUser } from '../actions';
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

interface OwnStateProps {
    code?: string;
}

interface DispatchFromProps {
    confirmUser: (code: string, userName: string) => void;
}

interface StateFromProps {
    userName?: string;
}
class ConfirmUser extends React.Component<any & StateFromProps, OwnStateProps> {
    static title: string = "Please confirm your account";
    constructor(props: any) {
        super(props);

        this.state = {

        }
    }

    onSubmit = (event: any) => {
        event.preventDefault();

        this.props.confirmUser(this.state.code, this.props.userName);

    }
    resendCode = () => {
        this.props.resendConfirmationCode(this.props.userName);
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.mainLayout}>

                        <View style={styles.logoImageView}>
                            <Image style={styles.logoImage} source={require('../../../assets/images/CatScanBigLogo.png')} />
                        </View>

                        <View style={styles.header}>

                            <MaterialIconsIcon
                                name="arrow-back"
                                color="black"
                                size={25}
                                onPress={() => this.goBack()}
                                style={styles.goBackIcon}
                            />
                            <Text style={styles.headerText}>{ConfirmUser.title}</Text>

                        </View>
                        <View style={styles.pageDescriptionView}>
                            <Text style={styles.pageDescription}>
                                Please check your email and find confirmation code for user    
                                <Text style={{ fontWeight: 'bold' }}>{`  ${this.props.userName}`}</Text>
                            </Text>
                        </View>

                        <View style={styles.confirmContainer}>


                            <Input
                                placeholder="Enter your confirmation code"
                                onChangeText={text => this.setState({ code: text })}
                                containerStyle={styles.textInput}
                                leftIcon={<Text></Text>}
                                inputContainerStyle={{ borderBottomWidth: 0, marginTop: 10 }}

                            />
                            
                            <Button onPress={this.onSubmit} style={styles.confirmButton}>
                                <Text style={{ fontWeight: 'bold' }}>Confirm account</Text>
                            </Button>

                        </View>

                    </View>
                </ScrollView>
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
        fontSize: 17,
        borderRadius: 10,

    },
    passwordInput: {
        marginTop: 15,
        marginBottom: 20
    },
    confirmContainer: {
        marginTop: 15,
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
        //marginTop: 55 //ios
        marginTop: 5 //android

    },
    logoImageView: {

    },
    mainLayout: {
        backgroundColor: 'white'
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
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 20
    },
    goBackIcon: {

    },
    headerText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 20
    },
    pageDescriptionView: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageDescription: {
        margin: 20

    },
    confirmButton: {
        marginTop: 155,
        height: 60,
        color: 'black',
        backgroundColor: '#ebebeb',

    },
    resendCode: {
        marginTop: 30,
        height: 40,
        width: '50%',
        color: 'black',
        backgroundColor: '#ebebeb',
    }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        userName: state.auth.userName
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    confirmUser
})(ConfirmUser);