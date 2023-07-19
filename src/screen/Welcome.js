import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Welcome = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.titleTextStyle}>Let us get to know you</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>What is your name?</Text>
          <TextInput
            value={name}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.label}>What is your email?</Text>
          <TextInput
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            style={styles.inputStyle}
          />
        </View>
      </View>
      <Pressable
        onPress={() => Alert.alert(`Hello ${name}!`)}
        style={styles.buttonWrapper}
      >
        <Text style={styles.buttonTextStyle}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#d7dfe1',
    width: width,
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: 24,
  },
  form: {
    paddingHorizontal: 40,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
  buttonWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  buttonTextStyle: {
    fontSize: 20,
    backgroundColor: '#d7dfe1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
  },
});
