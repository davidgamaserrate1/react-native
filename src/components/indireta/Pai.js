import React, { useState } from 'react'
import {  Text, SafeAreaView } from 'react-native';
 
import Filho from './Filho.js';

export default props =>{
    const [number, setNumber] = useState(0)

    const min =  1
    const max = 10

    function exibirValor (number){
        setNumber(number)
    }

    return(
    <SafeAreaView>
        <Text>{number}</Text>
        <Filho 
            min ={min}
            max = {max}
            funcao ={exibirValor}

        />
    </SafeAreaView>
    )
}