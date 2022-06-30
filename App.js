/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.flex}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.viewStyle}>
          <Text>Hello World</Text>
          <Button title="Close Modal" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
  },
  flex: {
    flex: 1,
  },
});

export default App;
