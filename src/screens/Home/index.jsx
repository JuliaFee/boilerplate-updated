import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import styles from './styles'
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'
export default function Totoro() {

  return (
    <View style={styles.container}>
      <Title text="🌸 The Girls 🌸" />
      <Image source={require('../../../assets/Aliners.jpg')} style={styles.image}/>
      <Text style={styles.nome}>Aline Evangelista</Text>
      <Text style={styles.text}>19 Anos</Text>
      <Image source={require('../../../assets/juliars.jpg')} style={styles.image}/>
      <Text style={styles.nome}>Júlia Ferreira</Text>
      <Text style={styles.text}>17 Anos</Text>
      <Image source={require('../../../assets/leticiars.jpg')} style={styles.image}/>
      <Text style={styles.nome}>Letícia Bizaglio</Text>
      <Text style={styles.text}>17 Anos</Text>
      <MyButton screen="Filmes" name="Séries Favoritos" />
      <MyButton screen="Hobby" name="Hobbies Das Girls" />
    </View>
  )
}