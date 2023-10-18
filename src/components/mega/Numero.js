import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import styles from "../../styles";

export default props =>{
    return(
        <SafeAreaView  style={style.Container}>
            <Text style={[style.Numero, styles.fontG]}>
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
        borderRadius:25,
    },
    Numero:{
        color: '#fff',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',         
        justifyContent:'center',
         
    }

})