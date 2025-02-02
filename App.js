import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  TextInput,
  NativeModules,
} from 'react-native';

const App = () => {
  const {TruthNFCModule} = NativeModules;
  const [dob, setDob] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Date of birth"
        style={styles.input}
        onChangeText={setDob}
        value={dob}
      />
      <TextInput
        placeholder="Date of expiry"
        style={styles.input}
        onChangeText={setExpiryDate}
        value={expiryDate}
      />
      <TextInput
        placeholder="Passport number"
        style={styles.input}
        onChangeText={setPassportNumber}
        value={setPassportNumber}
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => {
          TruthNFCModule.scanPassport(dob, expiryDate, passportNumber); // dob,expiry,passportnumber
        }}>
        <Text>Press to SCAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default App;
