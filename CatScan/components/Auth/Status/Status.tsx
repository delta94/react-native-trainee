import React from 'react';
import { getSession, logout } from '../../../Auth/helpers/accounts';
import { View, Text, Button } from 'react-native';

//import {  _retrieveToken, _removeToken } from '../../../Auth/helpers/localStorage';
interface OwnStateProps {
    status: boolean;
}
 
export default class Status extends React.Component<any & any & any, OwnStateProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            status: false
        }
    }

    componentDidUpdate = (prevProps: any, prevState: OwnStateProps) => {

        if (prevState.status != this.state.status) {
            getSession()
                .then((session: any) => {
                    console.log('getSession2:', session);
                    this.setState({ status: true });
                })
        }
    }



    //const token = _retrieveToken();
    //if(token && !status){
    //    setStatus(true);
    //}
    render() {
        return (
            <>

                <View>
                    {
                        this.state.status ? (
                            <>
                                <Text>You are logged in</Text>
                                <Button onPress={logout} title='logout'></Button>
                            </>
                        )
                            : <Text>Please login below</Text>
                    }
                </View>

            </>
        )
    }

}