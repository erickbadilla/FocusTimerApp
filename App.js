import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';

import { Focus } from './src/features/Focus.jsx'
import { Timer } from './src/features/Timer.jsx'
import { FocusHistory } from './src/features/FocusHistory.jsx'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history} /> 
        </>
        :
        <Timer 
          focusSubject={currentSubject}
          clearSubject={() => {setCurrentSubject(null)}}
          onTimerEnd={(subject) => setHistory([...history, subject])}
            
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});