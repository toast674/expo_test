import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color, name, onPress } = this.props;

    let bgColor = '#E31675';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31675';
    }

    return (
      //  72.なぜかstyleを上書きするとcirclebuttonが反映されない
      //  TouchableHighlight(なぜか小文字)をcontainerと逆にしたら画像だけ消えた 要改善
      //  三項演算子部分が原因？
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <TouchableHighlight onPress={onPress}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, style, { color: textColor }]} />
            ) : null
          }
        </TouchableHighlight>
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
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'FontAwsome',
  },
});

export default CircleButton;
