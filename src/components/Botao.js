import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
  

 
 
const  Botao = ()=>{
    
    function executa(){
        console.warn('Executado')
    }

    return (
      <SafeAreaView style={style.container}>
       <Button title="Executar #1" onPress={ executa}/>
       <Button title="Executar #2" onPress={ ()=>{console.warn('Executado 2')}}/>
      </SafeAreaView>
    )
}

export default Botao


const style = StyleSheet.create({
    container:{
        gap:15
    }
})