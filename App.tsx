/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <SafeAreaView style={styles.outerView}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#090909'}
      />
      <View style={styles.innerView}>
        <Text style={styles.text}>RNRACrashRepro</Text>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: '#242424',
            marginVertical: 8,
          }}
        />
        <Button onPress={handlePress} title="Grow" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: '#090909',
  },
  innerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default App;
