import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({navigation}) =>{
   const {state,signup,clearErrorMessage} = useContext(AuthContext) 

    return <View style={Style.Container}>
       <NavigationEvents onWillBlur={clearErrorMessage}/>
      <AuthForm
         HeaderText="Sign Up for Tracker"
         errorMessage={state.errorMessage}
         onSubmitButtonText="Sign Up"
         onSubmit={signup}
      />
      <NavLink
         text="Already have an account? Sign in instead!"
         routeName={'Signin'}
      />      
      
    </View>
}

SignupScreen.navigationOptions = () =>{
   return{
      headerShown:false
   };
};

const Style = StyleSheet.create({
   Container:{
      flex:1,
      justifyContent:"center",
      marginBottom:200
   },
});

export default SignupScreen;