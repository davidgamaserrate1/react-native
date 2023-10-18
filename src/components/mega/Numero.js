import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default props =>{
    return(
        <SafeAreaView  style={style.Container}>
            <Text style={style.Numero}>
                {props.numero}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container:{
        height:50,
        width:50,
        backgroundColor:'#000',
        margin:6,
        borderRadius:25
        
    },
    Numero:{
        Color: '#fff'
    }

})