import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { filmesPopulares, filmesAvaliados } from '../data/filmes.js';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>🎥 Catálogo de Filmes 🎬</Text>
      </View>

     
      <View style={styles.divisor} />

      <ScrollView>
       
        <TextInput placeholder="Buscar filme..." style={styles.input} />

        
        <Text style={styles.subtitulo}>Mais Populares</Text>
        <FlatList
          data={filmesPopulares} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { filme: item })}>
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <Text style={styles.cardTitulo}>{item.titulo}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

      
        <Text style={styles.subtitulo}>Mais Avaliados</Text>
        <FlatList
          data={filmesAvaliados} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { filme: item })}>
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <Text style={styles.cardTitulo}>{item.titulo}</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2} 
          contentContainerStyle={styles.flatListAvaliados}
        />

       
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => navigation.navigate('Avaliacao')} 
        >
          <Text style={styles.botaoTexto}>Ir para Avaliações</Text>
        </TouchableOpacity>
      </ScrollView>

     
      <View style={styles.footer}>
        <Text style={styles.footerTexto}>© 2025 Catálogo de Filmes. Todos os direitos reservados.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#ff69b4',
    padding: 15,
    alignItems: 'center',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Courier',
  },
  divisor: {
    height: 1,
    backgroundColor: '#ff69b4',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ff69b4',
    backgroundColor: '#fff0f5',
    fontFamily: 'Courier',
    color: '#c71585',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
    color: '#333',
    fontFamily: 'Courier',
  },
  card: {
    width: 180, 
    height: 220,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffc0cb', 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListAvaliados: {
    justifyContent: 'center',
    alignItems: 'center', 
    paddingHorizontal: 10, 
  },
  imagem: {
    width: '100%', 
    height: 150, 
    borderRadius: 5,
  },
  cardTitulo: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#c71585',
    fontFamily: 'Courier',
  },
  botao: {
    backgroundColor: '#ff69b4',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },
  footer: {
    backgroundColor: '#ff69b4',
    padding: 10,
    alignItems: 'center',
  },
  footerTexto: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Courier',
  },
});
