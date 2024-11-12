import React, { useEffect, useState } from 'react';
import {
  Alert, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text } from 'react-native';
import { getHash, startOtpListener, removeListener } from 'react-native-otp-verify';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function Main() {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  function getOtpCode(message: string){
    if(message){
      const otpCode = /(\d{4})/g.exec(message)![1];
      setCode(otpCode);
      setVerificationCode(otpCode);
    }
  }

  function handleCodeChange(position: number, value: string) {
    let newCode = verificationCode;

    if (position >= 0 && position <= 3) {
      const codeArray = newCode.split('');

      codeArray[position] = value;
      newCode = codeArray.join('');

      setVerificationCode(newCode);
    }
  }

  function handleSubmit(){
  
    if(code === verificationCode){
      navigation.navigate('secundaryscreen');
    } else {
      Alert.alert('Código inválido!');
    }
  }

  useEffect(() => {
    //getHash().then((hash) => console.log("MESSAGE HASH =>", hash));
    startOtpListener((message) => getOtpCode(message));

    return () => removeListener();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
      <TextInput
          style={styles.input}
          value={verificationCode[0]}
          onChangeText={(value) => handleCodeChange(0, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          value={verificationCode[1]}
          onChangeText={(value) => handleCodeChange(1, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          value={verificationCode[2]}
          onChangeText={(value) => handleCodeChange(2, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.input}
          value={verificationCode[3]}
          onChangeText={(value) => handleCodeChange(3, value)}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
      <TouchableOpacity 
        onPress={() => handleSubmit()}
        style={styles.button}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}