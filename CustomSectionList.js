import {Text, View, SectionList} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomSectionList = props => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View>
      <SectionList
        sections={props.data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default CustomSectionList;
