import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
    position: 'relative',
    marginTop: 35,
    marginRight: 17
  },
  catEars: {
    height: 125,
    width: 300,
    marginTop: '7%',
    position: 'absolute'
  },
  userCard: {
    alignItems: 'center',
    marginTop: '15%'
  }, 
  username: {
    marginLeft: '-7%',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:'10%',
  },
  bar: {
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    width: '65%',
    backgroundColor: 'black',
    color: 'white'
  },
  champ: {
   marginLeft: '3%',
   width: '23%'
  },
  trois: {
    marginLeft: '3%',
    marginTop: '3%'
  },
  list: {
    marginLeft: '10%',
    marginTop: '3%'
  }
})

export default function Nyuser () {
  return (
    <>
      <View style={styles.userCard}>
        <Text style={styles.username}>Thanyatos</Text>
        <Image style={styles.catEars} source={require('../assets/catEars.png')}/>
        <Image style={styles.img} source={require('../assets/Nyuser.jpg')} />
      </View>
        <View style={styles.data}>
          <Text style={styles.champ}>Mail : </Text>
          <Text style={styles.bar}>olympusgod@kittymail.sp</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.champ}>Ethnicité : </Text>
          <Text style={styles.bar}>Chat</Text>
        </View>
        <Text style={styles.trois}>3 boissons favorites 🐈‍⬛ : </Text>
        <View style={styles.list}>
          <Text>- Catnip Paradise</Text>
          <Text>- Purrfect WetFood</Text>
          <Text>- Milk</Text>
        </View>
    </>
  )
}