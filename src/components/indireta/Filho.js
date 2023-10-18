import React from 'react'
import { Button } from 'react-native'

export default props =>{
    function getRandom(min,max){
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min

    } 
    
    return(
    <Button
        title="Executar"
        onPress={
            ()=>{
                const n = getRandom(props.min, props.max)
                props.funcao(n)
            }
        }
    />
    )
}