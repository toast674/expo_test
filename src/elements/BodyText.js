import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
  },
});

export default BodyText;
