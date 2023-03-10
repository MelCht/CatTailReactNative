import { View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeList from './component/CocktailListHome';
import Nyuser from './component/User';
import DetailScreen from './component/Detail';
import Nyalcool from './component/Nyalcool';
import styles from './component/style';


// Création des données necessaires pour la navigation
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);


  // Récupération de l'api
  const getCocktail = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

// Récupération de 10 fois l'api stockée dans un tableau avec une vérification pour éviter les doublons
  const getData = async () => {
    setLoading(true);
    const newDataList = [];
    for (let i = 0; i < 10; i++) {
      const data = await getCocktail();
      newDataList.push(data);
    }
    setDataList(newDataList);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
      <NavigationContainer>
        <Tab.Navigator >
          {/* Première navigation qui sert d'accueil */}
        <Tab.Screen
          name="CatTail"
          component={HomeStack}
          initialParams={{ dataList : dataList, getCocktail : getCocktail }}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="glass-cocktail" size={25} color={'white'}/>
            ),
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
        {/* Navigation qui envoie sur la page de recherche par alcool */}
        <Tab.Screen
          name="Nyalcool?"
          component={NyalcoolScreen}
          initialParams={{ dataList : dataList, getCocktail : getCocktail }}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="magnify-expand" size={25} color={'white'}/>
            ),
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
        {/* Navigation qui envoie sur la page utilisateur */}
        <Tab.Screen
          name="Nyutilisateur"
          component={NyuserScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cat" size={25} color={'white'}/>
            ),
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
      )}
    </View>
  );
}

// Component qui permet l'affichage de la page d'accueil, avec une modale de navigation pour afficher les détails des cocktails
function HomeStack(props) {

  return (
    <Stack.Navigator>
      {/* Modale de navigation principale : la liste des cocktails, avec envoi des données necessaires */}
      <Stack.Screen
        name="Des cocktails pour vous 🐈‍⬛"
        component={HomeList}
        initialParams={{ dataList: props.route.params.dataList, getCocktail : props.route.params.getCocktail}}
      />
      {/* Deuxième écran de la modale de navigation : la page détail, avec envoi des données necessaires */}
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: 'Détails' }}
      />
    </Stack.Navigator>
  );
}

// Component pour afficher la page utilisateur
function NyuserScreen() {
  return (
    <>
      <Nyuser/>
    </>
  );
}  

// Component pour afficher la page cocktail par alcool
function NyalcoolScreen() {
  return (
    <>
      <Stack.Navigator>
      {/* Modale de navigation principale : la liste des cocktails, avec envoi des données necessaires */}
      <Stack.Screen
        name="Vous cherchez? 🐈‍⬛"
        component={Nyalcool}
      />
      {/* Deuxième écran de la modale de navigation : la page détail, avec envoi des données necessaires */}
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: 'Détails' }}
      />
    </Stack.Navigator>
    </>
  );
}  



