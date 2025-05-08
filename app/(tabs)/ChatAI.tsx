import { View, Text, StyleSheet } from 'react-native';

export default function ChatAI() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat com IA</Text>
      <Text>Aqui vai a interação com API de chatbot IA.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
});
