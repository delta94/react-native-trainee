import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/styles/colors';

export const styles = StyleSheet.create({
    userInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
    }
    ,
    scrollView: {

    },
    textInput: {
        height: 70,
        paddingLeft: 20,
        backgroundColor: colors.whiteSmoke,
        fontSize: 17,
        borderRadius: 10,
        margin: 5

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
    forgotContainer: {
        marginTop: 15,
        margin: 15,
        marginBottom: 30
    },
    line: {
        borderBottomColor: colors.whisper,
        borderBottomWidth: 1,
    },
    logoImage: {
        width: 420,
        height: 400,
        marginTop: 0

    },

    confirmPasswordLogoImage: {
        width: 420,
        height: 330,
        marginTop: 0

    },
    logoImageView: {

    },
    forgotPasswordLayout: {
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
    restorePasswordButton: {
        marginTop: 105,
        height: 60,
        color: 'black',
        backgroundColor: colors.whisper,

    },
    confirmRestorePasswordButton: {
        marginTop: 0,
        height: 60,
        color: 'black',
        backgroundColor: colors.whisper,

    }
});