import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [data, setData] = useState([
    {name: 'asad', key: 0},
    {name: 'Noor', key: 1},
    {name: 'Smit', key: 2},
    {name: 'Zohaib', key: 3},
    {name: 'farhad', key: 4},
    {name: 'Ahsan', key: 5},
    {name: 'Shahab', key: 6},
    {name: 'Nawab', key: 7},
    {name: 'Ilyas', key: 8},
    {name: 'Zubair', key: 9},
  ]);

  const handler = item => {
    console.log(item);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => handler(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  item: {
    fontSize: 22,
    backgroundColor: 'yellow',
    marginTop: 30,
    padding: 20,
  },
});
export default App;
