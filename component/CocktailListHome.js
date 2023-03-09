import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    textAlign: 'center'
  },
  flatlist: {
    marginTop: '10%',
    // borderColor: 'black',
    // borderWidth: 15,
    width: '100%',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
    // position: 'relative',
    marginTop: 25,
    marginRight: 17
  },
  catEars: {
    height: 125,
    width: 300,
    position: 'absolute'
  },
  drinkCard: {
    alignItems: 'center',
    marginTop: '5%'
  }
})



export default function HomeList (props) {
    const { dataList } = props.route.params 
    const navigation = useNavigation()

    return (
    <>     
      <FlatList
        data={dataList}
        style={styles.flatlist}
        keyExtractor={(item) => item.drinks[0].idDrink.toString()}
        renderItem={({ item }) => (
          <View style={styles.drinkCard}>
            <>
              <TouchableOpacity style={styles.drinkCard} onPress={() => navigation.navigate('DetailScreen', { id: item.drinks[0].idDrink ,instruction: item.drinks[0].strInstructions, ingrédients: [item.drinks[0].strIngredient1, item.drinks[0].strIngredient2, item.drinks[0].strIngredient3, item.drinks[0].strIngredient4, item.drinks[0].strIngredient5, item.drinks[0].strIngredient6, item.drinks[0].strIngredient7, item.drinks[0].strIngredient8, item.drinks[0].strIngredient9] })}>
              <>
                <Image style={styles.catEars} source={require('../assets/catEars.png')} />
                <Image style={styles.img} source={{ uri: item.drinks[0].strDrinkThumb }}/>
              </>
                <Text>{item.drinks[0].strDrink}</Text>
              </TouchableOpacity>  
            </>
          </View>
        )}
      />
    </>
    )
}


