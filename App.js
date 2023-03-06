import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CatTail from './component/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
    position: 'relative',
    marginTop: 25,
    marginRight: 17
  },
  catEars: {
    height: 125,
    width: 300,
    position: 'absolute'
  },
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
  drinkCard: {
    alignItems: 'center',
    marginTop: '5%'
  }
});

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  const getCocktail = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    setLoading(true);
    const newDataList = [];
    for (let i = 0; i < 10; i++) {
      const data = await getCocktail();
      newDataList.push(data);
    }
    setDataList(newDataList);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
    <CatTail />
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.title}>10 cocktails pour vous 🐈‍⬛  </Text>         
          <FlatList
          data={dataList}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <View style={styles.drinkCard}>
              <>
              <Image style={styles.catEars} source={                                                                                                                                                                                                                         require('./assets/catEars.png')}/>
                <Image style={styles.img} source={{ uri: item.drinks[0].strDrinkThumb }} />
              </>
              <Text>{item.drinks[0].strDrink}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </>
      )}
    </ScrollView>
    </>
  );
}

