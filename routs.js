import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletToDo from "./CompletToDo";

    const Tab=createBottomTabNavigator()
    const Routs=()=>{
        return(
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={StackNavigation}/>
                <Tab.Screen name="Complet ToDo" component={CompletToDo}/>
            </Tab.Navigator>
             </NavigationContainer>
        )
       

    }

    export default Routs