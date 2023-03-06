import { Text , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    catBottom: {
        textAlign: 'center'
    }
})

export default function CatBottom (props) {
    return (
        <Text style={styles.catBottom}>Miaou</Text>
    )
}