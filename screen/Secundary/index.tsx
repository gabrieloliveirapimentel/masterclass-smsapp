import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function Secundary() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: '#FFF'}]}>Second screen!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[styles.text, {color: '#8257E5'}]}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}