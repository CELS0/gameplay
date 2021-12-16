import React from 'react';
import { Image, View } from 'react-native';
import { CDN_IMAGE } from '../../configs/discordAuth';
import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg'

type Props = {
    guildId: string;
    iconId: string;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View>
            {
                iconId ?
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
                :
                <DiscordSvg
                width={40}
                height={40}
                />
            }
        </View>
    )
}