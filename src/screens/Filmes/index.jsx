import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/MyButton'
export default function Filme() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Title text="Série Favorita" />
        <MyButton screen="Home" name="Go to Home" />
        <View style={styles.posteres}>
          <Image source={require('../../../assets/naruto.jpg')} style={styles.image}/>
          <Text style={styles.nome}>Naruto</Text>
          <Text>Aline Evangelista</Text>
          <Image source={require('../../../assets/breakingbad.jpg')} style={styles.image}/>
          <Text style={styles.nome}>Breaking Bad</Text>
          <Text>Júlia Ferreira</Text>
          <Image source={require('../../../assets/osucessor.jpg')} style={styles.image}/>
          <Text  style={styles.nome}>O Sucessor</Text>
          <Text>Leticia Bizaglio</Text>
        </View>
    </View>
  )
}