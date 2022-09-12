import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [result, setResult] = useState('');
  const [calc1, setCalc1] = useState('');
  const [calc2, setCalc2] = useState('');

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const showList = () => {
    setData([...data, { key: text }]);
    setCalc1('');
    setCalc2('');
  }
  const doAddition = () => {
    let res = parseInt(calc1) + parseInt(calc2);
    setResult(res);

    setText(calc1 + ' + ' + calc2 + ' = ' + res); // Set the previous value
    showList();
  }
  const doSubstraction = () => {
    let res = parseInt(calc1) - parseInt(calc2);
    setResult(res);

    setText(calc1 + ' - ' + calc2 + ' = ' + res); // Set the previous value
    showList();
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.margins, styles.textTop]} >Result: {result} </Text>
      <TextInput style={[styles.textinputs, styles.margins]}
        keyboardType='numeric'
        onChangeText={calc1 => setCalc1(calc1)}
        value={calc1} />
      <TextInput style={[styles.textinputs, styles.margins]}
        keyboardType='numeric'
        onChangeText={calc2 => setCalc2(calc2)}
        value={calc2} />
      <View style={styles.buttons} >
        <Button onPress={doAddition} title=" + " />
        <Button onPress={doSubstraction} title=" - " />
      </View>
      <FlatList contentContainerStyle={styles.items}
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Text> {item.key} </Text>}
        ListHeaderComponent={<Text style={styles.title} > History </Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textinputs: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  margins: {
    margin: '3%',
  },
  list: {
    paddingVertical: '5%',
  },
  textTop: {
    marginTop: 100,
  },
  items: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});
