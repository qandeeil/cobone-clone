import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

type CodeCardProps = {
  title: string;
  placeholder: string
};

export function CodeCard({title, placeholder}: CodeCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.containerInput}>
        <TextInput placeholder={placeholder} style={styles.input}/>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonPay}>
          <Text style={styles.textButton}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
