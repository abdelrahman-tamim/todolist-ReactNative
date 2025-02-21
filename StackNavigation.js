import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList } from 'react-native-web';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoDetails from "./ToDoDetails"
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
const Stack = createNativeStackNavigator()


const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "React Native Lab"
}, {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: " Spervesion Metting"
},
{
    id: "f92e1a4b-d3c7-42e8-bf15-8a6c9d2f7c1X",
    title: "Watch A movie"
},
]

const Home = () => {
    const { navigate } = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container} >
                <Text style={styles.maintext}>TODOAPP</Text>
                <TextInput style={styles.textinput} placeholder='Enter Title'></TextInput>
                <TextInput style={styles.textinput} placeholder='Enter Description'></TextInput>
                <TouchableOpacity style={styles.submitbtn}>
                    <Text style={styles.sumbittext}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.dividerLine}></View>
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text>In progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => {
                    return <View>
                        <Text onPress={() => navigate("Detailes", item)} style={styles.iteminput}>{item.title}<View style={styles.icon}>{Platform.OS == "ios" ? <AntDesign name="checkcircle" size={24} color="black" /> : <AntDesign name="checkcircleo" size={24} color="black" />} <Feather name="trash-2" size={24} color="black" /></View></Text>
                    </View>

                }} >
                </FlatList>
            </View>
        </SafeAreaView>)
}

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Detailes' component={ToDoDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}




const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
    },
    content: {
        width: "100%",
        justifyContent: "center"
    },
    maintext: {
        fontSize: 30,
    },
    textinput: {
        margin: 10,
        height: 40,
        width: 350,
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    submitbtn: {
        width: "40%",
        height: 50,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
    },
    sumbittext: {
        color: 'white',
        padding: 10,
    },
    dividerLine: {
        height: 1,
        width: "90%",
        backgroundColor: "#aeaeae",
        marginVertical: 15,
    },
    filterContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    filterBtn: {
        width: "30%",
        backgroundColor: "#ffffff",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },
    iteminput: {
        margin: 10,
        height: 40,
        width: 350,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        backgroundColor: '#fff',
        display:"flex",
        justifyContent:"space-between",
    },
   icon: {
    display:"flex",
    flexDirection:"row" ,
    marginBottom:"5px",


    }


});

export default StackNavigation