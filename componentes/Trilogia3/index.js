import React from "react";
import { View, Text, Image } from "react-native";

import estilos from "./estilos";
import sith from '../../assets/sith.jpg';

export default function Trilogia3(){
    return(
        <View style={estilos.container}>
            <View>
                <Text style={estilos.titulo}> A história de Rey</Text>

                <Image source={sith} style={estilos.img}/>

                <Text style={estilos.subtitulo}> Trilogia sequela. Episódios VII. VIII e IX </Text>

                <Text style={estilos.texto}> Enquanto surge uma nova ameaça para a galáxia. Rey, uma catadora de sucata, e Finn, um
                    soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança
                    de restaurar a paz da galáxia.
                </Text>
            </View>
        </View>
    );
}