import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import { Buttonicon } from "../../components/Buttonicon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

export function Signin() {
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (err) {
      Alert.alert(err)
    }
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