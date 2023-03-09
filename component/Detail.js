import { Text, View, FlatList } from 'react-native';

export default function DetailScreen({ route, navigation }) { 
    const { id, instruction, ingrédients } = route.params;
    {console.log(ingrédients)}
    return (
      <>
      <Text>Instructions : {instruction}</Text>
      <FlatList
        data={ingrédients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{}</Text>
        )}
      />
    </>      
    )
  }