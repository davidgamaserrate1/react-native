import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";




export default props =>{
    const [number, setNumber ] = useState(0)

    
    function increment(){
        setNumber( number + 1 );
    }
    function decrement(){
        setNumber( number - 1);
    }
    

    

    return (
        <SafeAreaView>
            <Text>{number}</Text>
             
            <Button title="+" onPress={increment}/>
            <Button title="-" onPress={decrement}/>
             
        
        </SafeAreaView>
    )
}