import { configureStore } from "@reduxjs/toolkit";
import TodoSllice from "./TodoSlice"

const store = configureStore({
    reducer: {
        TodoSlice: TodoSllice
    }

})

export default store