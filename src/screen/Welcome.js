import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Welcome = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text>Let us get to know you</Text>
      <View>
        <Text>What is your name?</Text>
        <TextInput
          value={name}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          style={styles.inputStyle}
        />
      </View>
      <View>
        <Text>What is your email?</Text>
        <TextInput
          value={email}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          style={styles.inputStyle}
        />
      </View>
      <View>
        <Pressable onPress={() => Alert.alert(`Hello ${name}!`)}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
