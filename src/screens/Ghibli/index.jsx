import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'
export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title text="Ghibli" />
      <MyButton screen="Totoro" name="Go to Totoro" />
      <MyButton screen="Home" name="Go to Home" />
    </View>
  )
}