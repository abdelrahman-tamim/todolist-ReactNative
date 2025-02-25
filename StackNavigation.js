import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoDetails from "./ToDoDetails"
import { useDispatch, useSelector } from "react-redux";
import AllTodo from './AllTodo';
import { loadTodos, saveTodos } from './TodoSlice';
import TodoForm from './TodoForm';
import styles from './Styles';



const Stack = createNativeStackNavigator()


export const Home = () => {

    const Todolist = useSelector((state) => state.TodoSlice.TodoList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    useEffect(() => {
        dispatch(saveTodos(Todolist))
    }, [Todolist])





    return (


        <SafeAreaView style={styles.container}>
            <TodoForm />
            <AllTodo />
        </SafeAreaView>


    )
}

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Detailes' component={ToDoDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}



export default StackNavigation