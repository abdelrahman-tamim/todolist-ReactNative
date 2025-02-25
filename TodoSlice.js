import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


   export const loadTodos=createAsyncThunk("todos/loadtodos",async()=>{
            let storedTodos= await AsyncStorage.getItem("todos")
            return storedTodos? JSON.parse(storedTodos):[]
    })

    export const saveTodos=createAsyncThunk("todos/savetodos",async(TodoList)=>{
        AsyncStorage.setItem("todos",JSON.stringify(TodoList))
    })


const TodoSllice = createSlice({
    name: "TodoSllice",
    initialState: {
        TodoList: [],
        filterdTodoList: []
    },
    reducers: {
        addToDo: (state, action) => {
            state.TodoList.push(action.payload)
        },
        loadtodo: async () => {
            let storedTodos = await AsyncStorage.getItem("todos");
            if (storedTodos != null) {
                state.TodoList = [...storedTodos]
            }

        },
        deleteToDo: (state, action) => {
            state.TodoList = state.TodoList.filter((item) => item.id != action.payload)
        },
        checkToDo: (state, action) => {
            state.TodoList.map((item) => {
                item.id == action.payload ? item.isDone = !item.isDone : item
                return item
            })
        },
        allTodos: (state) => {
            state.filterdTodoList = [...state.TodoList];

        },
        inprogressTodos: (state) => {
            state.filterdTodoList = [...state.TodoList.filter((item) => item.isDone == false)];

        },
        doneTodos: (state) => {
            state.filterdTodoList = [...state.TodoList.filter((item) => item.isDone == true)];
        },
        
        
    },
    extraReducers:(builder)=>{
        builder.addCase(loadTodos.fulfilled,(state,action)=>{
            state.TodoList=action.payload
        })
    }
    
})


export default TodoSllice.reducer
export const { addToDo, deleteToDo, checkToDo, allTodos, inprogressTodos, doneTodos, loadtodo } = TodoSllice.actions