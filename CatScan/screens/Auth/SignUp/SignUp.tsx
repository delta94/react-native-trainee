import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput

} from 'react-native';
import { Header } from 'react-native-elements';
import { Button, InputItem } from '@ant-design/react-native';
import UserPool from '../../../Auth/configs/UserPool';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
interface OwnStateProps {
  email: string;
  password: string;
}

class SignUp extends React.Component<any & any & any, OwnStateProps> {
  static title: string = "Sign Up";

  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit = (event: any) => {
    event.preventDefault();

    UserPool.signUp(this.state.email, this.state.password, [], [], (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle='dark-content' />

        <View style={styles.signUpContainer}>

          <View style={styles.header}>

            <MaterialIconsIcon
              name="arrow-back"
              color="black"
              size={25}
              onPress={() => this.props.navigation.goBack()}
              style={styles.goBackIcon}
            />
            <Text style={styles.headerText}>{SignUp.title}</Text>

          </View>

          <View style={styles.pageDescriptionView}>
            <Text style={styles.pageDescription}>Lorem ipsum dolor sit amt, Ipsum dolor sit amt, ipsum dolor sit amt, consectetur</Text>
          </View>
          <View style={styles.credentialsInputs}>

            <TextInput
              placeholder="Enter Email"
              onChangeText={text => this.setState({ email: text })}
              style={[styles.textInput]}

            />
            <TextInput
              placeholder='Enter Password'
              onChangeText={text => this.setState({ password: text })}
              style={[styles.textInput]}
            />
            <TextInput
              placeholder='Repeat Password'
              onChangeText={text => null}
              style={[styles.textInput]}
            />
          </View>

          <View style={styles.line} />

          <View style={styles.personalInfoInputs}>

            <View style={styles.firstAndLastNames}>

              <TextInput
                placeholder='First Name'
                onChangeText={text => null}
                style={[styles.textInput, styles.firstName]}
              />

              <TextInput
                placeholder='Last Name'
                onChangeText={text => null}
                style={[styles.textInput, styles.lastName]}

              />
            </View>
            <TextInput
              placeholder="Company name (optinal)"
              onChangeText={text => this.setState({ email: text })}
              style={[styles.textInput]}

            />
            <TextInput
              placeholder='Phone number (optinal)'
              onChangeText={text => this.setState({ password: text })}
              style={[styles.textInput]}
            />
            <TextInput
              placeholder='Zip code'
              onChangeText={text => this.setState({ password: text })}
              style={[styles.textInput, styles.zipCode]}
            />
          </View>
          <View style={styles.signUpButtonView}>
            <Button onPress={this.onSubmit} style={styles.signUpButton}>Sign Up</Button>
          </View>

        </View>
      </>
    );
  }

};

const styles = StyleSheet.create({

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
    marginTop: 50
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
    marginTop: 60
  },
  goBackIcon: {

  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20
  },
  signUpContainer : {
    backgroundColor : 'white'
  }
});

export default SignUp;

