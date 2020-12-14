import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const Spacer = ({children}) =>{
    return <View style={Style.Spacer}>{children}</View>
};

const Style = StyleSheet.create({
    Spacer:{
        margin:15
    }
});

export default Spacer;