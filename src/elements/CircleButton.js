import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#E31675';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31675';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
