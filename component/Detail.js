import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({

  puce: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '10%',
    paddingTop: '3%'
  },
  titleName:{
    color: 'gray',
    marginTop: '2%'
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
    position: 'relative',
    marginTop: 45,
    marginRight: 17,
    marginBottom: '5%'
  },
  catEars: {
    height: 125,
    width: 300,
    position: 'absolute',
    marginTop: '10%'
  },
  pic: {
    alignItems: 'center'
  }
})

export default function DetailScreen({ route, navigation }) { 
    const { instruction, ingrédients, pic, name } = route.params;
    return (
      <>
        <View style={styles.pic}>
          <Text style={styles.titleName}>{name}</Text>
          <Image style={styles.catEars} source={require('../assets/catEars.png')} />
          <Image style={styles.img} source={{ uri: pic }}/>
        </View>
      <Text style={styles.instruction}>Instructions : {instruction}</Text>
      <FlatList
        data={ingrédients}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({ item }) => (
          <View style={styles.puce}>
            {item ? <MaterialCommunityIcons name="paw" size={25} color={'black'}/> : null}
            <Text>{item}</Text>
          </View>
        )}
      />
    </>      
    )
  }