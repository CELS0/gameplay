import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import { Buttonicon } from "../../components/Buttonicon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { AuthContext } from "../../hooks/auth";

export function Signin() {
  const navigation = useNavigation();

  const context = useContext(AuthContext);
  console.log(context)

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
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
    </Background>
  );
}