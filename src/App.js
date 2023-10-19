import React, { Component, useState } from "react"
import { SafeAreaView, StyleSheet, Text} from "react-native"
import Buttons from "./components/Buttons"
import Display from "./components/Display"

const initialState ={
    displayValue : '0',
    clearDisplay : false,
    operation: null,
    values:[0,0],
    current: 0
} 

export default class App extends Component{
        state ={ ...initialState}
    
        addDigit = n =>{
                if(n === '.' && this.state.displayValue.includes('.')) {
                    return
                }

            const clearDisplay = this.state.displayValue === '0'  
                || this.state.clearDisplay

            const currentValue = clearDisplay ? '' : this.state.displayValue
            const displayValue = currentValue + n
            this.setState({displayValue, clearDisplay: false})

            if( n !== '.'){
                const newValue = parseFloat(displayValue)
                const values = [...this.state.values]
                values[this.state.current] = newValue
                this.setState({values})
            }

        }

        clearMemory = () =>{
            this.setState({...initialState})
        }

        setOperation = n =>{

        }

    render(){
        return (

        <SafeAreaView style={style.container} >
            <Display value={ this.state.displayValue} />
            <SafeAreaView style={style.buttons} >
                <Buttons label='AC' triple onClick={this.clearMemory} />
                <Buttons label='/' operation onClick={this.setOperation} />
                <Buttons label='7' onClick={this.addDigit}/>
                <Buttons label='8' onClick={this.addDigit}/>
                <Buttons label='9' onClick={this.addDigit}/>
                <Buttons label='*' operation onClick={this.setOperation}/>
                <Buttons label='4' onClick={this.addDigit}/>
                <Buttons label='5' onClick={this.addDigit}/>
                <Buttons label='6' onClick={this.addDigit}/>
                <Buttons label='-' operation onClick={this.setOperation}/>
                <Buttons label='1' onClick={this.addDigit}/>
                <Buttons label='2' onClick={this.addDigit}/>
                <Buttons label='3' onClick={this.addDigit}/>
                <Buttons label='+' operation onClick={this.setOperation}/>
                <Buttons label='0' double onClick={this.addDigit}/>
                <Buttons label='.' onClick={this.addDigit}/>
                <Buttons label='=' operation onClick={this.setOperation}/>
            </SafeAreaView>
        </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container:{        
       flex :1 , 
       color:'#fff',
    } ,
    buttons:{
        flexDirection:'row', 
        flexWrap:'wrap',
        color:'#fff'

    }
})

