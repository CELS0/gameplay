import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import { Buttonicon } from "../../components/Buttonicon";
import { useNavigation } from "@react-navigation/native";

export function Signin() {
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
        </Text>
      <Buttonicon
       title="Entrar com Discord"
        onPress={handleSignIn}
        />
      </View>
    </View>
  );
}