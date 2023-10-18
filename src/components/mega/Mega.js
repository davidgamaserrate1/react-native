import React, {Component} from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import Numero from "./Numero";


export default class Mega extends Component {

    state ={
        quantidade : this.props.quantidade,
        numeros:[]
    }


    alterarQuantidade =(qtde)=>{
        this.setState( { quantidade : +qtde })
    }

    gerarNumerosNaoContidos = (nums) =>{
        const novo = parseInt(Math. floor(Math. random() * 60 ) + 1)

        return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
    }

    gerarNumeroOLd = () =>{
        const numeros = Array(this.state.quantidade)
            .fill()
            .reduce(n => [...n, this.gerarNumerosNaoContidos(n)], [])
            .sort( (a,b) => a -b  )
        this.setState({numeros})
    }
    gerarNumero = () =>{
        const quantidade = this.state.quantidade
        const numeros = []

        for(let i = 0; i < quantidade; i++){
            let n = this.gerarNumerosNaoContidos(numeros)
            numeros.push(n)
        }

        numeros.sort((a,b) => a - b)

        this.setState({numeros})
    }

    exibirNUmeros = () =>{
        const nums = this.state.numeros
       return  nums.map( num => {
        <Numero numero={num}/> 
       })
    }

    render(){
        return(
            <>
                <Text>
                    Numero mega sena 
                </Text>

                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="Qtde de Numeros"
                    value={`${this.state.quantidade}`}
                    onChangeText={this.alterarQuantidade}
                />

                <Button                     
                    title="Gerar"
                    onPress={this.gerarNumero}
                />

                
                {/* {this.exibirNUmeros()} */}
                
             
               
                

                
            </>
        )
    }
}