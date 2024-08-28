import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontSize: 15,
        marginBottom: 10
    },

    image: {
        width: 150,
        height: 200,
        borderRadius: 35,
    }, 
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }

})
export default styles