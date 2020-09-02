import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Platform

} from 'react-native';
import { Header } from 'react-native-elements';
import { Button, InputItem } from '@ant-design/react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';

import { connect } from 'react-redux';
import { AppState } from '../../../reducers';
import { updateUserAttributes, getUserInfo } from '../actions';
import { UserAttributes } from '../../Auth/reducer';
import { styles } from './styles';
import { NavigationProp, NavigationContainerProps } from '@react-navigation/native';

interface OwnStateProps {
  firstName: string;
  lastName: string;

  companyName: string;
  phoneNumber: string;
  zipCode: string;
}

interface DispatchFromProps {
  updateUserAttributes: (
    phoneNumber: string,
    firstName: string,
    lastName: string,
    companyName: string,
    zipCode: string
  ) => void;

  getUserInfo: () => void;
}
interface StateFromProps {
  userAttributes?: UserAttributes,
  isUserAttributesUpdated: boolean
}


class EditProfile extends React.Component<StateFromProps & DispatchFromProps & any, OwnStateProps> {
  static title: string = "Edit Profile";
  constructor(props: StateFromProps & DispatchFromProps & any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
      zipCode: '',
    }
  }

  onSubmit = (event: any) => {
    let { phoneNumber, firstName, lastName, companyName, zipCode } = this.state;
    this.props.updateUserAttributes(phoneNumber, firstName, lastName, companyName, zipCode);

  }
  componentDidMount() {
    this.props.getUserInfo();
  }

  componentDidUpdate(prevProps: StateFromProps) {
    const thisProps = this.props as StateFromProps;

    if (thisProps.userAttributes && thisProps.userAttributes != prevProps.userAttributes) {
      this.setState({
        firstName: thisProps.userAttributes.firstName,
        lastName: thisProps.userAttributes.lastName,
        companyName: thisProps.userAttributes.companyName,
        phoneNumber: thisProps.userAttributes.phoneNumber,
        zipCode: thisProps.userAttributes.zipCode
      })
    }
  }
  render() {

    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <StatusBar barStyle='dark-content' />

            <View style={styles.mainContainer}>

              <View style={styles.header}>

                <MaterialIconsIcon
                  name="arrow-back"
                  color="black"
                  size={25}
                  onPress={() => this.props.navigation.goBack()}
                  style={styles.goBackIcon}
                />
                <Text style={styles.headerText}>{EditProfile.title}</Text>

              </View>

              <View style={styles.pageDescriptionView}>
                <Text style={styles.pageDescription}>Lorem ipsum dolor sit amt, Ipsum dolor sit amt, ipsum dolor sit amt, consectetur</Text>
              </View>
              <View style={styles.credentialsInputs}>


              </View>

              <View style={styles.line} />

              <View style={styles.personalInfoInputs}>

                <View style={styles.firstAndLastNames}>

                  <TextInput
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChangeText={text => this.setState({ firstName: text })}
                    style={[styles.textInput, styles.firstName]}
                  />

                  <TextInput
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChangeText={text => this.setState({ lastName: text })}
                    style={[styles.textInput, styles.lastName]}

                  />
                </View>
                <TextInput
                  placeholder="Company name"
                  value={this.state.companyName}
                  onChangeText={text => this.setState({ companyName: text })}
                  style={[styles.textInput]}

                />
                <TextInput
                  placeholder='Phone number '
                  value={this.state.phoneNumber}
                  onChangeText={text => this.setState({ phoneNumber: text })}
                  style={[styles.textInput]}
                />
                <TextInput
                  placeholder='Zip code'
                  value={this.state.zipCode}
                  onChangeText={text => this.setState({ zipCode: text })}
                  style={[styles.textInput, styles.zipCode]}
                />
              </View>
              <View style={styles.signUpButtonView}>
                <Button onPress={this.onSubmit} style={styles.signUpButton}>Save Changes</Button>
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
    userAttributes: state.auth.userAttributes,
    isUserAttributesUpdated: state.auth.isUserAttributesUpdated
  };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
  updateUserAttributes,
  getUserInfo
})(EditProfile);