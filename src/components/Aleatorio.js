import React from "react";
import { Text } from "react-native";

function getAleatorio (min, max){
    return Math. floor(Math. random() * (max - min + 1) ) + min
}

const Aleatorio = (props) =>{
    return(
    <Text>
        Numero Aleatorio {getAleatorio(props.min, props.max)}
    </Text>
    )
}

export default Aleatorio 