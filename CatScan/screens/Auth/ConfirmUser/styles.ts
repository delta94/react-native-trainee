import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/styles/colors';

export const styles = StyleSheet.create({
    scrollView: {

    },
    textInput: {
        height: 70,
        paddingLeft: 20,
        backgroundColor: colors.whiteSmoke,
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
        borderBottomColor: colors.whisper,
        borderBottomWidth: 1,
    },
    logoImage: {
        width: 420,
        height: 400,
        marginTop: 0

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
        color: colors.darkGray,
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
        marginTop: 125,
        height: 60,
        color: 'black',
        backgroundColor: colors.whisper,

    },
    resendCode: {
        marginTop: 30,
        height: 40,
        width: '50%',
        color: 'black',
        backgroundColor: colors.whisper,
    }
});