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
import { updateUserAttributes } from '../actions';


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
    ) => void
}
interface StateFromProps {

}


class EditProfile extends React.Component<any & any & any, OwnStateProps> {
    static title: string = "Edit Profile";
    constructor(props: any) {
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

    render() {
        return (
            <>
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
                placeholder="Company name"
                onChangeText={text => this.setState({ companyName: text })}
                style={[styles.textInput]}

              />
              <TextInput
                placeholder='Phone number '
                onChangeText={text => this.setState({ phoneNumber: text })}
                style={[styles.textInput]}
              />
              <TextInput
                placeholder='Zip code'
                onChangeText={text => this.setState({ zipCode: text })}
                style={[styles.textInput, styles.zipCode]}
              />
            </View>
            <View style={styles.signUpButtonView}>
              <Button onPress={this.onSubmit} style={styles.signUpButton}>Save Changes</Button>
            </View>

          </View>
        </ScrollView>
      </>
        );
    }
};

const styles = StyleSheet.create({
    
  zipCode: {
    width: '45%'
  },
  personalInfoInputs: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
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
    marginTop: 10,
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
    marginTop: Platform.OS === 'ios' ? 230 : 200
  },
  signUpButtonView: {
    flexDirection: 'column',
    alignItems: 'center'

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
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: Platform.OS === 'ios' ? 20 : 0 //ios
  }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    updateUserAttributes
})(EditProfile);