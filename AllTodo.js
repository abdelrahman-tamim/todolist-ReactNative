import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import TodoCard from './TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import { allTodos } from './TodoSlice';

let AllTodo = () => {
    const Todolist = useSelector((state) => state.TodoSlice.TodoList)
    const filterdTodoList = useSelector((state) => state.TodoSlice.filterdTodoList)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(allTodos())
    }, [Todolist])
    
    return (
        <>
            <FlatList data={filterdTodoList} keyExtractor={item => item.id} renderItem={({ item }) => {
                return (
                    <TodoCard item={item} />
                )

            }} >
            </FlatList>


        </>
    )

}

export default AllTodo