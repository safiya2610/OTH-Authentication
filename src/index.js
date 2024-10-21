// OTP.js
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from '../config'; 


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Otp = () => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(PhoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
    setPhoneNumber('');
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, Code);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode('');
        Alert.alert('Successfully logged in!');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otpTitle}>Login using OTP</Text>
      <TextInput
        placeholder="Enter Phone No."
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textInput}
        value={PhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={sendVerification}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Confirm Code"
        onChangeText={setCode}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textInput}
        value={Code}
      />
      <TouchableOpacity style={styles.button} onPress={confirmCode}>
        <Text style={styles.buttonText}>Confirm Verification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  otpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
