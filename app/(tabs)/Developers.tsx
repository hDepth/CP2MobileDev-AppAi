import { View, Text, StyleSheet } from 'react-native';

export default function Developers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>
      <Text>Projeto criado por [Seu Nome], [Outros Nomes] – 2025.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
});
