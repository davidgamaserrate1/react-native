import React from "react"
import { SafeAreaView, StyleSheet} from "react-native"
import styles from "./styles"

import Primeiro from "./components/Primeiro"
import MinMax from "./components/MinMax"
import Def2, {Teste1, Teste2} from './components/Multi'
import Aleatorio from "./components/Aleatorio"

import Botao from "./components/Botao"
import Contador from "./components/contador"
import Pai from "./components/indireta/Pai"
import Mega from "./components/mega/Mega"

export default () =>
    (
         <SafeAreaView style={style.App} >
            <Mega quantidade={6}/>
            {/* <Contador /> */}
            {/* <Pai /> */}
            {/* <Contador /> */}
            {/* <Botao /> */}
            {/* <Aleatorio min={1} max={10}/> */}
            {/* <MinMax  />             */}
            {/* <Def2 />
            <Teste1 />
            <Teste2/>
            <Primeiro /> */}
         </SafeAreaView>
    )


const style = StyleSheet.create({
    App:{
        
       flexGrow: 1, 
       justifyContent : 'center',
       alignItems: 'center',
       padding: 20,
    }
})

