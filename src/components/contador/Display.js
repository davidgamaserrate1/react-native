import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Botoes from "./Botoes";


export default props =>{
  


    return (
        <SafeAreaView style={styles.Display}>
            <Text>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    Display:{
        backgroundColor: "#f0f0f0"
    }
})