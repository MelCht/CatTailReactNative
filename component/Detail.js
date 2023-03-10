import { Text, View, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export default function DetailScreen({ route }) { 
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
        <Image style={styles.catEarsDetail} source={require('../assets/catEars.png')} />
        <Image style={styles.imgDetail} source={{ uri: pic }}/>
      </View>
      <View style={styles.bloc}>
        <Text style={styles.instruction}>Instructions : {instruction}</Text>
        {/* Flatslist pour boucler dans le tableau pour récupérer les ingrédients et les quantités */}
        <FlatList
          style={styles.flat}
          data={ingrédientsQuantités}
          keyExtractor={(item, id) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.puce}>
              {/* Vérification pour ne pas afficher l'icone ni le ":" si les valeurs d'ingrédients sont "null" */}
              {item.ingrédient ? <MaterialCommunityIcons name="paw" size={25} color={'black'}/> : null}
              <Text>{item.ingrédient} {item.ingrédient && item.quantité ? <Text>:</Text> : null} {item.quantité}</Text>
            </View>
          )}
        />
      </View>
    </>      
  )
}