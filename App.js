import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from "./src/utils/colors";
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? <Focus addSubject={setCurrentSubject}></Focus> : <Timer focusSubject={currentSubject} onTimerEnd={() => {}} clearSubject={() => {}}/>}
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
        