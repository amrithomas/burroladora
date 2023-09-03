import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import a from '../../../assets/icon-cardapio.png'

const ButtonCardapio = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image
        source={a}
        style={{ marginHorizontal: 10, width: 36, height: 36 }}
      />
    </TouchableOpacity>
  );
};


export default ButtonCardapio;
