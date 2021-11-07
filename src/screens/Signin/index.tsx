import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import { Buttonicon } from "../../components/Buttonicon";

export function Signin() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>
      <Buttonicon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}