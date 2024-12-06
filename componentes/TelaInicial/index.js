import React from "react";
import { View, Text, Image, Button } from "react-native";

import estilos from "./estilos.js";
import logo from '../../assets/logo.jpg';


export default function TelaInicial(props) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}> Star Wars ordem cronológica </Text>
            <Image source={logo} style={estilos.img} />

            <Text style={estilos.titulo2}> Você sabe qual é a ordem cronológica da franquia Star Wars? </Text>

            <Text> Os principais filmes da franquia estão divididos em e trilogias. Clique no botão a seguir para conferir.</Text>

            <Button
            title="Ver 1ª Trilogia " 
            onPress={() => props.navigation.navigate("Trilogia 1")} color="#372d00" />
             <Text> </Text>

            <Button 
            style={estilos.Butt}
            title="Ver 2ª Trilogia " 
            onPress={() => props.navigation.navigate("Trilogia 2")} color="#372d00" />
             <Text> </Text>

            <Button 
            title="Ver 3ª Trilogia " 
            onPress={() => props.navigation.navigate("Trilogia 3")} color="#372d00" />

        </View>
    );
}