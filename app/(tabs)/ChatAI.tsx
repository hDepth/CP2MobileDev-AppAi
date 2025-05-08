import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { colors, spacing, fontSizes } from '../../utils/theme';
import { OPENAI_API_KEY } from '@env';

export default function ChatAI() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: newMessages,
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices?.[0]?.message;

      if (aiMessage) {
        setMessages([...newMessages, aiMessage]);
      }
    } catch (error) {
      console.error('Erro ao acessar a OpenAI:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Chat com IA" />
      <ScrollView style={styles.chat}>
        {messages.map((msg, idx) => (
          <Text
            key={idx}
            style={[
              styles.message,
              msg.role === 'user' ? styles.user : styles.ai,
            ]}
          >
            {msg.role === 'user' ? 'Você: ' : 'IA: '}
            {msg.content}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua pergunta..."
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
        <Button title="Enviar" onPress={sendMessage} color={colors.accent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  chat: {
    flex: 1,
    padding: spacing.md,
  },
  message: {
    fontSize: fontSizes.medium,
    marginBottom: spacing.sm,
  },
  user: {
    color: colors.accent,
    textAlign: 'right',
  },
  ai: {
    color: colors.text,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.surface,
  },
  input: {
    flex: 1,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.muted,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    marginRight: spacing.sm,
  },
});
