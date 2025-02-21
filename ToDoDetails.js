import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";

const ToDoDetails = () => {
    const {params}=useRoute()
    return (
        
        <>
            <Text>{params.id}</Text>
            <Text>{params.title}</Text>
        </>
    )
}
export default ToDoDetails  