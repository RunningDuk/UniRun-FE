import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import GetItemModal from '../modal/GetItemModal';

type UnivItemProps = {
  mascot: any;
  logo: any;
  name: string;
  rd: number;
};

const UnivItem: React.FC<UnivItemProps> = ({mascot, logo, name, rd}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onPressModalOpen = () => {
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPressModalOpen}>
        <Image source={mascot} style={styles.mascot} />

        <View style={styles.univContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={[styles.name, {marginLeft: 10}]}>{name}</Text>
        </View>

        <Image source={require('../../assets/rd.png')} style={styles.rdImg} />
        <View style={styles.rdContainer}>
          <Text style={styles.rd}>{rd}</Text>
        </View>
      </TouchableOpacity>

      <GetItemModal visible={isModalVisible} onClose={onPressModalClose} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#D9D9D9',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  univContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  msg: {
    resizeMode: 'cover',
    width: '102%',
    position: 'absolute',
  },
  mascot: {
    resizeMode: 'contain',
    marginLeft: 15,
  },
  logo: {
    resizeMode: 'contain',
    marginLeft: 25,
  },
  name: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  rdContainer: {
    width: 100, // 시작점 통일
  },
  rd: {
    color: 'black',
    fontWeight: 'bold',
    left: 40,
  },
  rdImg: {
    marginLeft: 50,
    left: 30,
    resizeMode: 'contain',
  },
});

export default UnivItem;
