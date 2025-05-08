import { View, Text, StyleSheet } from 'react-native';

export default function ImageAnalysis() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análise de Imagem com IA</Text>
      <Text>Aqui será possível enviar imagens e obter respostas da IA.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
});
