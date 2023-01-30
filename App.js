import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from "./src/utils/colors";
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
      <Focus addSubject={setCurrentSubject} /> 
      <FocusHistory history={history} />
      </>
      ) : (
      <Timer 
      focusSubject={currentSubject} 
      onTimerEnd={() => {setHistory([...history, currentSubject])}} 
      clearSubject={() => {setCurrentSubject(null)}}/>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50
  },
});
        