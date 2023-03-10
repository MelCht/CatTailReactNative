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
  // Récupération de props envoyés par CocktailListHome
    const { instruction, ingrédients, pic, name, quantités } = route.params;
    // Fusion des tableaux ingrédients et quantités pour pouvoir concatener les données
    const ingrédientsQuantités = ingrédients.map((ingrédient, index) => ({
      ingrédient: ingrédient,
      quantité: quantités[index],
    }));

    return (
      <>
        <View style={styles.pic}>
          <Text style={styles.titleName}>{name}</Text>
          <Image style={styles.catEars} source={require('../assets/catEars.png')} />
          <Image style={styles.img} source={{ uri: pic }}/>
        </View>
      <Text style={styles.instruction}>Instructions : {instruction}</Text>
      {/* Flatslist pour boucler dans le tableau pour récupérer les ingrédients et les quantités */}
      <FlatList
        data={ingrédientsQuantités}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({ item }) => (
          <View style={styles.puce}>
            {/* Vérification pour ne pas afficher l'icone ni le ":" si les valeurs d'ingrédients et quantités sont "null" */}
            {item.ingrédient && item.quantité ? <MaterialCommunityIcons name="paw" size={25} color={'black'}/> : null}
            <Text>{item.ingrédient} {item.ingrédient && item.quantité ? <Text>:</Text> : null} {item.quantité}</Text>
          </View>
        )}
      />
    </>      
    )
  }