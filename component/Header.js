import { Image , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    catTail: {
        width: '100%',
        height: '20%',
        marginTop: '10%'
    }
})

export default function CatTail (props) {
    return (
        <Image style={styles.catTail} source={require('../assets/CatTail.png')}/>
    )
}