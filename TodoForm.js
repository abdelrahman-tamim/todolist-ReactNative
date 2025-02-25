import React, { useRef, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addToDo, doneTodos, inprogressTodos, allTodos } from './TodoSlice';
import styles from './Styles';

const TodoForm = () => {
    const [title, setTitle] = useState("")
    const [isDone, setIsDone] = useState(false)
    let txt = useRef()
    const dispatch = useDispatch();

    handleSubmit = () => {
        let todoObj = {
            id: Date.now(),
            title: title,
            isDone: isDone
        }
        dispatch(addToDo(todoObj))
        txt.current.clear()
        setTitle("")
    }

    return (
        <>


            <Text style={styles.maintext}>TODOAPP</Text>
            <TextInput ref={txt} onChange={(e) => setTitle(e.target.value)} style={styles.textinput} placeholder='Enter Title'></TextInput>
            <TextInput style={styles.textinput} placeholder='Enter Description'></TextInput>
            <TouchableOpacity style={styles.submitbtn}>
                <Text onPress={handleSubmit} style={styles.sumbittext}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.dividerLine}></View>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => dispatch(allTodos())} style={styles.filterBtn}>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(inprogressTodos())} style={styles.filterBtn}>
                    <Text>In progress</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(doneTodos())} style={styles.filterBtn}>
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>


        </>
    )
}

export default TodoForm
