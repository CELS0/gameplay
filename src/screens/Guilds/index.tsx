import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { styles } from './styles';

type Props = {
  handlerGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({ handlerGuildsSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Load /> :
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <Guild
              data={item}
              onPress={() => handlerGuildsSelect(item)}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          style={styles.guilds}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
        />
      }
    </View>
  )
}
