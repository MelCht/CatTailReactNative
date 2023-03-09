import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();

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



export default function HomeList (props, navigation) {
    const { dataList } = props.route.params 

    return (
    <>
      <Text style={styles.title}>10 cocktails pour vous 🐈‍⬛  </Text>         
      <FlatList
        data={dataList}
        style={styles.flatlist}
        keyExtractor={(item) => item.drinks[0].idDrink.toString()}
        renderItem={({ item }) => (
          <View style={styles.drinkCard}>
            <>
              <Image style={styles.catEars} source={require('../assets/catEars.png')}/>     
                <RootStack.Group>
                  <RootStack.Screen name="CoktailPic" component={CocktailPicScreen} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                  <RootStack.Screen name="MyModal" component={ModalScreen} />
                </RootStack.Group>
            </>
            <Text>{item.drinks[0].strDrink}</Text>  
          </View>
        )}
      />
    </>
    )
}

function CocktailPicScreen({ route, navigation }) { 
  // const { item } = route.params;
  // {console.log(item)}
  return (
    <>
    <Text> Oskour </Text>
      {/* <Image style={styles.img} source={{ uri: item.drinks[0].strDrinkThumb }} onPress={() => navigation.navigate('MyModal')}/> */}
   </> 
  )
}

function ModalScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}