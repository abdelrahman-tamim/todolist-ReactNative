
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { deleteToDo, checkToDo } from './TodoSlice';
import styles from './Styles';





const TodoCard = ({ item }) => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()




    return (
        <View>
            <Text onPress={() => navigate("Detailes", item)} style={styles.iteminput}>{item.title}
                <View style={styles.icon}>
                    <Pressable onPress={() => dispatch(checkToDo(item.id))}>
                        {item.isDone ?
                            <AntDesign name="checkcircle" size={24} color="black" /> :
                            <AntDesign name="checkcircleo" size={24} color="black" />}
                    </Pressable>
                    <Pressable onPress={() => dispatch(deleteToDo(item.id))}> <Feather name="trash-2" size={24} color="black" /></Pressable>
                </View>
            </Text>
        </View>)
}



export default TodoCard;