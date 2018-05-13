// @flow
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, H3 } from 'native-base';

import { paddingMedium, paddingSmall } from '../config/Styles';
import { getWidth } from '../helpers/ScreenDimensions';

const imageWidth = (getWidth() / 2) - paddingMedium - (paddingMedium / 2);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touchable: {
    height: 250,
    width: imageWidth,

  },

  image: {
    height: 200,
    width: '100%',
  },
  textContainer: {
    padding: paddingSmall,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

type Props = {
    image: string,
    id: string,
    title: string,
    subTitle: string,
    price: string,
    navigateToProduct: Function,
}

export default function FeatureTagCard(props: Props) {
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => { props.navigateToProduct(props.id); }}
    >
      <Image style={styles.image} source={{ uri: props.image }} resizeMode="cover" />
      <View style={styles.textContainer}>
        <H3 style={styles.text}>{props.price}</H3>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>

  );
}
