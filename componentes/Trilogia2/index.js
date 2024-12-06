import React from "react";
import { View, Text, Image } from "react-native";

import estilos from "./estilos";
import luke from '../../assets/lucas-skywalker.jpg';


export default function Trilogia2(){
    return(
        <View style={estilos.container}>
          <View>
            <Text style={estilos.titulo}> A história de Luke Skywalker</Text>

            <Image source={luke} style={estilos.img} />

            <Text style={estilos.subtitulo}> Trilogia original Episódio IV. V e VI </Text>

            <Text style={estilos.texto}> Essa foi a primeira trilogia a surgir porém sua história se passa após a trilogia prequeia. </Text>

            <Text style={estilos.texto2}> Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorroda princesa Leia
                e batalha com o grande vilão Darth Vader. 
            </Text>

          </View>
        </View>
    );
}