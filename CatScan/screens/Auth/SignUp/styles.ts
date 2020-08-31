import { StyleSheet, Platform } from 'react-native';

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
      //backgroundColor: '#f2f2f2',
      flexDirection: 'column',
      alignItems: 'center',
    },
    pageDescription: {
      margin: 20
  
    },
    signUpHeader: {
      backgroundColor: '#f2f2f2'
    },
    textInput: {
      height: 55,
      paddingLeft: 20,
      backgroundColor: '#f7f7f7',
      marginTop: 15,
      fontSize: 17,
      borderRadius: 10,
  
    },
  
    signUpButton: {
      height: 60,
      width: '92%',
      color: 'black',
      //backgroundColor: '#ebebeb',
      marginTop: Platform.OS === 'ios' ? 30 : 20
    },
    signUpButtonView: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    line: {
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1,
    },
  
    header: {
      //backgroundColor: '#f2f2f2',
      flexDirection: 'row',
      marginLeft: 15,
      marginTop: Platform.OS === 'ios' ? 60 : 30
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
      marginTop: Platform.OS === 'ios' ? 20 : 0 //ios
    }
  });