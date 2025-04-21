import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { filmesPopulares, filmesAvaliados } from '../data/filmes.js';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>🎥 Catálogo de Filmes 🎬</Text>
      </View>

      {/* Linha divisória */}
      <View style={styles.divisor} />

      <ScrollView>
        {/* Barra de Pesquisa */}
        <TextInput placeholder="Buscar filme..." style={styles.input} />

        {/* Seção Mais Populares */}
        <Text style={styles.subtitulo}>Mais Populares</Text>
        <FlatList
          data={filmesPopulares} // Usa os dados importados
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

        {/* Seção Mais Avaliados */}
        <Text style={styles.subtitulo}>Mais Avaliados</Text>
        <FlatList
          data={filmesAvaliados} // Usa os dados importados
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { filme: item })}>
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <Text style={styles.cardTitulo}>{item.titulo}</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2} // Exibe 2 cards por linha
          contentContainerStyle={styles.flatListAvaliados} // Centraliza os itens
        />

        {/* Botão para Avaliações */}
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => navigation.navigate('Avaliacao')} // Navega para a página Avaliacao
        >
          <Text style={styles.botaoTexto}>Ir para Avaliações</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
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
    width: 180, // Largura fixa para os cards
    height: 220, // Altura fixa para os cards
    margin: 10,
    padding: 10,
    backgroundColor: '#ffc0cb', // Rosa claro para os cards
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListAvaliados: {
    justifyContent: 'center', // Centraliza os cards horizontalmente
    alignItems: 'center', // Centraliza os cards verticalmente
    paddingHorizontal: 10, // Espaçamento horizontal
  },
  imagem: {
    width: '100%', // Faz a imagem ocupar toda a largura do card
    height: 150, // Altura fixa para as imagens
    borderRadius: 5,
  },
  cardTitulo: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#c71585', // Rosa escuro para os títulos dos cards
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