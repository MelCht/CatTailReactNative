import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  flatlist: {
    width: '100%',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
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
  },
  bloc: {
    marginLeft: '3%'
  },
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
  pic: {
    alignItems: 'center'
  },
  flat: {
    height: '40%'
  },
  imgDetail: {
    height: 150,
    width: 150,
    borderRadius: 50,
    position: 'relative',
    marginTop: 45,
    marginRight: 17,
    marginBottom: '5%'
  },
  catEarsDetail: {
    height: 125,
    width: 300,
    position: 'absolute',
    marginTop: '10%'
  },
  recherche: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: '20%'
  },
  input: {
    width: '60%',
    backgroundColor: 'black',
    borderRadius: 25,
    color: 'white',
    marginRight: '3%',
  },
  rechercheBouton: {
    marginTop: '5%',
    marginLeft: '5%',
  }
});

export default styles;