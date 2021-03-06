import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import { styles } from "./styles";
import DiscordImg from '../../assets/discord.png';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

type Props = RectButtonProps &{
  title?: string,
}

export function Buttonicon({title, ...rest}:Props) {
  return (
    <RectButton 
    style={styles.container}
    {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
      {title}
      </Text>
    </RectButton>
  );
}