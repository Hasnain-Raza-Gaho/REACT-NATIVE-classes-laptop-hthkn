import React, {useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import styles from './styles';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }>
        <Text>Pull to Refresh</Text>
      </ScrollView>
    </View>
  );
};

export default App;
