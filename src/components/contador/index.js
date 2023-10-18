import React, { useState } from 'react'
import {  Text, SafeAreaView } from 'react-native';
import Display from './Display';
import Botoes from './Botoes';

export default props =>{
    const [initial, setInitial] =  useState(0)

    const inc = ()=> setInitial(initial +1)
    const dec = ()=> setInitial(initial -1)

    return(
    <SafeAreaView>
      
        <Text> Contador</Text>
        <Display num={initial} />
        <Botoes inc={inc} dec={dec} />

    </SafeAreaView>
    )
}