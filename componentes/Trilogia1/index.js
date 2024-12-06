import React from "react";
import { View, Text, Image } from "react-native";

import estilos from "./estilos";
import dartv from '../../assets/darth-vader.jpeg';

export default function Trilogia1() {
    return (
        <View style={estilos.container}>

            <View>
                <Text style={estilos.titulo}> A história do Darth Vader</Text>

                <Image source={dartv} style={estilos.img}/>

                <Text style={estilos.subtitulo}> Trilogia prequela. Episódios I. II e III</Text>

                <Text style={estilos.texto}> Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem cronológica da
                    série Star Wars. Nela é contada a história do grande vilão Darth Vader.
                </Text>

                <Text style={estilos.texto2}> Através dessa trilogia você vai saber de onde veio e quem ele é</Text>

            </View>
        </View>
    );
}