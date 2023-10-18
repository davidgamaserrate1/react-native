import React from "react";
import { Text } from "react-native";
import styles from "../styles";

export default (props) =>{
    console.warn(props)
    return (
        <Text style={styles.fontG}>  
            O x é maior que o Y 
        </Text>
    )
}