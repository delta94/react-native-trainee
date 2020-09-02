import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../constants/styles/colors';

export const styles = StyleSheet.create({

    zipCode: {
      width: '45%'
    },
    personalInfoInputs: {
      marginTop: 25,
      margin: 15,
      marginBottom: 30
    },
    firstAndLastNames: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    firstName: {
      width: '47%',
      marginRight: '5%'
    },
    lastName: {
      width: '47%'
    },
  
    credentialsInputs: {
      marginTop: 25,
      margin: 15,
      marginBottom: 30
    },
  
    scrollView: {
  
    },
    pageDescriptionView: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    pageDescription: {
      margin: 20
  
    },
    signUpHeader: {
      backgroundColor: colors.whiteSmoke2
    },
    textInput: {
      height: 55,
      paddingLeft: 20,
      backgroundColor: colors.whiteSmoke,
      marginTop: 15,
      fontSize: 17,
      borderRadius: 10,
  
    },
  
    signUpButton: {
      height: 60,
      width: '92%',
      color: 'black',
      marginTop: 30
    },
    signUpButtonView: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    line: {
      borderBottomColor: colors.whisper,
      borderBottomWidth: 1,
    },
  
    header: {
      flexDirection: 'row',
      marginLeft: 15,
      marginTop: 0
    },
    goBackIcon: {
  
    },
    headerText: {
      fontSize: 23,
      fontWeight: 'bold',
      marginLeft: 20
    },
    signUpContainer: {
      backgroundColor: 'white',
      height: '100%',
      marginTop: 20
    }
  });