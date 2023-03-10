import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function Nyalcool (props) {
  const [searchText, setSearchText] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation()

  // Appel à l'api pour une recherche de cocktail par alcool
  const searchCocktails = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`)
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks);
        data.drinks.forEach(cocktail => getDetails(cocktail.idDrink));
      })
      .catch(error => console.error(error));
  };

  // Appel à l'api pour récupérer les détails necessaires pour la page détail
  const getDetails = async (id) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="Search for cocktails"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.searchButton} onPress={searchCocktails}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
      {cocktails.length > 0 && (
        <FlatList
          data={cocktails}
          keyExtractor={item => item.idDrink}
          renderItem={({ item }) => (
            <View style={styles.drinkCard}>
            <>
            {/* Passage des données necessaires pour Detail.js */}
              <TouchableOpacity style={styles.drinkCard}   
              onPress={() => {
              const idDrink = item.idDrink;
              getDetails(idDrink).then(cocktail => {
                navigation.navigate('DetailScreen', {
                  name: cocktail.strDrink,
                  pic: cocktail.strDrinkThumb,
                  instruction: cocktail.strInstructions,
                  ingrédients: [
                    cocktail.strIngredient1,
                    cocktail.strIngredient2,
                    cocktail.strIngredient3,
                    cocktail.strIngredient4,
                    cocktail.strIngredient5,
                    cocktail.strIngredient6,
                    cocktail.strIngredient7,
                    cocktail.strIngredient8,
                    cocktail.strIngredient9
                  ],
                  quantités: [
                    cocktail.strMeasure1,
                    cocktail.strMeasure2,
                    cocktail.strMeasure3,
                    cocktail.strMeasure4,
                    cocktail.strMeasure5,
                    cocktail.strMeasure6,
                    cocktail.strMeasure7,
                    cocktail.strMeasure8,
                    cocktail.strMeasure9
                  ],
                  key: cocktail.idDrink
                });
              });
            }}
          >
            <>
                <Image style={styles.catEars} source={require('../assets/catEars.png')} />
                <Image style={styles.img} source={{ uri: item.strDrinkThumb }}/>
              </>
                <Text>{item.strDrink}</Text>
              </TouchableOpacity>  
            </>
          </View>
          )}
        />
      )}
    </View>
  );
};