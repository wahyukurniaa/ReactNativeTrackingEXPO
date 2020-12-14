import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'

const SigninScreen = ({navigation}) =>{
    const {state,signin,clearErrorMessage} = useContext(AuthContext)
    return (
        <View style={Style.Container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                HeaderText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                onSubmitButtonText="Sign In"
            />
            <NavLink
                text="Dont have account? Sign up instead"
                routeName="Signup"
            />
        </View>
    )
}
SigninScreen.navigationOptions = () =>{
    return{
       headerShown:false
    };
 };
 

const Style = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200
     }
});

export default SigninScreen;