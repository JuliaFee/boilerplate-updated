import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
export default function Totoro() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOTOROOOOOOOOOOOO</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}