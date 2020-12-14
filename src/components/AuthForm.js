import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthFrom = ({HeaderText, errorMessage, onSubmit, onSubmitButtonText}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    return(
    <>
      <Spacer>
            <Text h3>{HeaderText}</Text>
      </Spacer>
         <Input 
            label='Email' 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize={"none"}
            autoCorrect={false}
            />
      <Spacer/>
         <Input 
            secureTextEntry
            label='Password'
            value={password}
            onChangeText={setPassword}
            autoCapitalize={"none"}
            autoCorrect={false}
            />
            
         {errorMessage ?(
            <Text style={Style.errorMessage}>{errorMessage}</Text>
         ) : null}

      <Spacer>
         <Button 
            title={onSubmitButtonText}
            onPress={()=>onSubmit({email,password})}
            />
      </Spacer> 
    </>
    );
     
};

const Style = StyleSheet.create({
    errorMessage:{
        fontSize:16,
        marginLeft:15,
        marginTop:15,
        color:'red'
     },
});

export default AuthFrom;