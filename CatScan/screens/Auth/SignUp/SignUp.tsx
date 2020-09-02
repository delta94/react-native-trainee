import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Platform,
  TouchableOpacity

} from 'react-native';
import { Header } from 'react-native-elements';
import { Button, InputItem } from '@ant-design/react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { signUp } from '../actions';
import { connect } from 'react-redux';
import { AppState } from '../../../reducers';
import { styles } from './styles';

interface OwnStateProps {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;

  companyName: string;
  phoneNumber: string;
  zipCode: string;
}

interface DispatchFromProps {
  signUp: (
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    companyName: string,
    zipCode: string
  ) => void
}
interface StateFromProps {
  signUpSuccess?: boolean;
}


class SignUp extends React.Component<any & StateFromProps & DispatchFromProps, OwnStateProps> {
  static title: string = "Sign Up";

  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
      zipCode: '',

      repeatPassword: '',
    }
  }
  navigateToLogin = () => {
    this.props.navigation.navigate('Login');
  }
  onSubmit = (event: any) => {
    event.preventDefault();

    if (this.state.password !== this.state.repeatPassword) {

    }
    else {
      let { email, password, phoneNumber, firstName, lastName, companyName, zipCode } = this.state;
      this.props.signUp(email, password, phoneNumber, firstName, lastName, companyName, zipCode)
    }

  }

  componentDidUpdate(prevProps: StateFromProps, prevState: OwnStateProps) {
    if (this.props.signUpSuccess && !prevProps.signUpSuccess) {
      this.navigateToLogin();
    }
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView>
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
                  autoCapitalize='none'
                  style={[styles.textInput]}
                  keyboardType='email-address'

                />
                <TextInput
                  placeholder='Enter Password'
                  onChangeText={text => this.setState({ password: text })}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  style={[styles.textInput]}
                />
                <TextInput
                  placeholder='Repeat Password'
                  onChangeText={text => this.setState({ repeatPassword: text })}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  style={[styles.textInput]}
                />
              </View>

              <View style={styles.line} />

              <View style={styles.personalInfoInputs}>

                <View style={styles.firstAndLastNames}>

                  <TextInput
                    placeholder='First Name'
                    onChangeText={text => this.setState({ firstName: text })}
                    style={[styles.textInput, styles.firstName]}
                  />

                  <TextInput
                    placeholder='Last Name'
                    onChangeText={text => this.setState({ lastName: text })}
                    style={[styles.textInput, styles.lastName]}

                  />
                </View>
                <TextInput
                  placeholder="Company name (optinal)"
                  onChangeText={text => this.setState({ companyName: text })}
                  style={[styles.textInput]}

                />
                <TextInput
                  placeholder='Phone number (optinal)'
                  onChangeText={text => this.setState({ phoneNumber: text })}
                  autoCapitalize='none'
                  style={[styles.textInput]}
                />
                <TextInput
                  placeholder='Zip code'
                  onChangeText={text => this.setState({ zipCode: text })}
                  autoCapitalize='none'
                  style={[styles.textInput, styles.zipCode]}
                />
              </View>
              <View style={styles.signUpButtonView}>
                <Button onPress={this.onSubmit} style={styles.signUpButton}>Sign Up</Button>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

};

const mapStateToProps = (state: AppState): StateFromProps => {
  return {
    signUpSuccess: state.auth.signUpSuccess
  };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
  signUp
})(SignUp);
