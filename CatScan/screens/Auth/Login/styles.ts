import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants/styles/colors';


export const styles = StyleSheet.create({
    scrollView: {

    },
    textInput: {
        height: 70,
        paddingLeft: 20,
        backgroundColor: colors.whiteSmoke,
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
        backgroundColor: colors.whisper
    },
    inputLabel: {
        fontSize: 20
    },
    loginContainer: {
        // marginTop: 25,
        margin: 15,
        marginBottom: 30
    },
    line: {
        borderBottomColor: colors.whisper,
        borderBottomWidth: 1,
    },
    loginImage: {
        width: 420,
        height: 400,
        marginTop: 35
    },
    loginImageView: {

    },
    loginLayout: {
        backgroundColor: 'white',
        height: '100%'
    },
    signUpLinksView: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    dontHaveAnAccount: {
        fontSize: 18,
        color: colors.darkGray,
        marginTop: 0,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    }
});