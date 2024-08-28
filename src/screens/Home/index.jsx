import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'
export default function Totoro() {
  return (
    <View style={styles.container}>
      <Title text="Home" />
      <MyButton screen="Totoro" name="Go to Totoro" />
    </View>
  )
}