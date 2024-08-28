import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/MyButton'
export default function Hobby() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Title text="Hobbies Favoritos" />
        <MyButton screen="Home" name="Go to Home" />
        <View style={styles.posteres}>
          <Image source={require('../../../assets/ler.jpg')} style={styles.image}/>
          <Text style={styles.nome}>Ler Livros</Text>
          <Text>Aline Evangelista</Text>
          <Image source={require('../../../assets/valorant.jpg')} style={styles.image}/>
          <Text style={styles.nome}>Jogar Valorant</Text>
          <Text>Júlia Ferreira</Text>
          <Image source={require('../../../assets/volei.jpeg')} style={styles.image}/>
          <Text  style={styles.nome}>Jogar Vôlei</Text>
          <Text>Leticia Bizaglio</Text>
        </View>
    </View>
  )
}