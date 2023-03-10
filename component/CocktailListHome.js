import { Text, View,  FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from './style';



export default function HomeList (props) {
  // Récupération des props passé par App.js
    const { getCocktail } = props.route.params 
    const [newDataList, setNewDataList] = useState(props.route.params.dataList);
    const navigation = useNavigation()

    // Fonction pour l'infinite scroll
    const onLoadMore = async () => {
      const scrollDataList = [];
      for (let i = 0; i < 2; i++) {
        const data = await getCocktail();
        scrollDataList.push(data);
      }
      setNewDataList(prevDataList => [...prevDataList, ...scrollDataList]);
    };
  

    return (
    <>     
    {/* Utilisation d'une flatlist pour boucler sur les json enregistré dans "dataList" affin de tous les afficher sur la page */}
      <FlatList
        data={newDataList}
        style={styles.flatlist}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.drinkCard}>
            <>
            {/* Passage des données necessaires pour Detail.js */}
              <TouchableOpacity style={styles.drinkCard} onPress={() => navigation.navigate('DetailScreen', 
              { 
                name:item.drinks[0].strDrink,  
                pic: item.drinks[0].strDrinkThumb ,
                instruction: item.drinks[0].strInstructions, 
                ingrédients: [
                  item.drinks[0].strIngredient1, 
                  item.drinks[0].strIngredient2, 
                  item.drinks[0].strIngredient3, 
                  item.drinks[0].strIngredient4, 
                  item.drinks[0].strIngredient5, 
                  item.drinks[0].strIngredient6, 
                  item.drinks[0].strIngredient7, 
                  item.drinks[0].strIngredient8, 
                  item.drinks[0].strIngredient9
                ], 
              quantités: [
                item.drinks[0].strMeasure1,
                item.drinks[0].strMeasure2,
                item.drinks[0].strMeasure3,
                item.drinks[0].strMeasure4,
                item.drinks[0].strMeasure5,
                item.drinks[0].strMeasure6,
                item.drinks[0].strMeasure7,
                item.drinks[0].strMeasure8,
                item.drinks[0].strMeasure9
                ],
                key: item.key,
              })}>
              <>
                <Image style={styles.catEars} source={require('../assets/catEars.png')} />
                <Image style={styles.img} source={{ uri: item.drinks[0].strDrinkThumb }}/>
              </>
                <Text>{item.drinks[0].strDrink}</Text>
              </TouchableOpacity>  
            </>
          </View>
        )}
        // Implémentation de l'infinite scroll (Non fonctionnel pour le moment)
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.9}
      />
    </>
    )
}


