import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { filmesAvaliados } from '../data/filmes.js'; // Importa as avaliações do arquivo filmes.js

export default function AvaliacaoScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.texto}>Estrelas: ★★★★★{item.estrelas} {'★'.repeat(item.estrelas)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Avaliações</Text>
      <FlatList
        data={filmesAvaliados} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffe4e1', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c71585', // Rosa escuro
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Courier', 
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffc0cb', 
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c71585', 
    marginBottom: 5,
    fontFamily: 'Courier', 
  },
  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Courier', 
    textAlign: 'center',
  },
  estrelas: {
    fontSize: 16,
    color: '#ff69b4', 
    fontFamily: 'Courier', 
  },
});
