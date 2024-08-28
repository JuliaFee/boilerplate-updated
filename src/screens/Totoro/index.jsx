import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Title from '../../components/Title'
import MyButton from '../../components/MyButton'
export default function Totoro() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Title text="Totoro" />
        <MyButton screen="Home" name="Go to Home" />
    </View>
  )
}