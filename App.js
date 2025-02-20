import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-web';


export default function App() {

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "React Native Lab"
  }, {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: " Spervesion Metting"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bH",
    title: "Watch A movie"
  },
]
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
            <Text style={styles.iteminput}>{item.title}</Text>
          </View>

        }} >
        </FlatList>



      </View>
    </SafeAreaView>
  );
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
  }


});
