import { StyleSheet, View, ActivityIndicator, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeList from './component/CocktailListHome';
import Nyuser from './component/User';
import Detail from './component/Detail';

const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
      <NavigationContainer>
        <Tab.Navigator >
        <Tab.Screen
          name="CatTail"
          component={HomeScreen}
          initialParams={{ dataList : dataList }}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="glass-cocktail" size={25} color={'white'}/>
            ),
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
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

function HomeScreen(props) {
  return (
    <>
      <HomeList route={props.route}/>
    </>
  );
}  

function NyuserScreen() {
  return (
    <>
      <Nyuser/>
    </>
  );
}  



