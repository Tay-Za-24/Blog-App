import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'

const LoadingScreen = () =>  {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;