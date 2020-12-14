import React,{useContext} from 'react';
import {Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = ({navigations}) =>{
    const {signout} = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Button
                title = 'Sign out'
                onPress={signout}
            />
        </SafeAreaView>   
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon : <FontAwesome name="gear" size={20}/>
}


const Style = StyleSheet.create({});

export default AccountScreen;