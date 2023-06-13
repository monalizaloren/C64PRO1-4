import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Tela2 = () => {
  const navigation = useNavigation();

  const playSound = async () => {
    try {
      const soundObject = new Audio.Sound();
      /*Coloque o link da música: 
      http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3
      */
      await soundObject.loadAsync({ uri: '???' });
      /*No exemplo do som, imagine que você quer tocar uma música, mas primeiro precisa carregar
      o arquivo de música. Usando await, você diz ao computador para esperar até que o arquivo de 
      música seja completamente carregado antes de tentar reproduzi-lo. Isso é importante porque,
      se você tentar tocar o som antes que ele seja carregado, não vai funcionar. */
      ??? soundObject.playAsync();
    } catch (error) {
      
      console.log('Error playing sound: ', error);
    }
  };

  React.useLayoutEffect(() => {
    /*Defina o título da tela como "Equipe 1' */
    navigation.setOptions({ title: '???' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clique para ouvir um som</Text>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>Play Sound</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
    height: 150,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Tela2;
