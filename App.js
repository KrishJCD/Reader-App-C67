import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableHighlight
} from 'react-native';
import { Header } from 'react-native-elements';
import PhonicSound from './components/PhonicSound';



import db from './localdb';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phones:[],
    };
  }

  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <Header
          backgroundColor="#ffffff"
          centerComponent={{ text: 'Reader App' }}></Header>

        <TextInput
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.display}
          onPress={() => {
            const text=this.state.text.toLowerCase();
            db[text]?(
            this.setState({ chunks: db[text].chunks }),
            this.setState({phones:db[text].phones})
            ):(
              Alert.alert("Word Does not Exist or the Input Field is Empty")
            );



          }}>
          <Text style={styles.text}>GO</Text>
        </TouchableOpacity>

        <View>
          {
            this.state.chunks.map((item,index)=>{
              return<PhonicSound phonicName={this.state.phones[index]} chunkName={this.state.chunks[index]}/>

            })
          }
        </View>


        <Text style={styles.disp}>{this.state.displayText}</Text>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffffff',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  display: {
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    padding: 10,
  },
  disp: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
});
