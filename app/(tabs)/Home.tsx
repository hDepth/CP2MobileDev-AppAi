import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { colors, spacing, fontSizes } from '../../utils/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Início" />
      <View style={styles.content}>
        <Text style={styles.welcome}>Bem-vindo ao CP2APPAI!</Text>
        <Text style={styles.description}>
          Explore o poder da inteligência artificial através de chat, análise de imagem e mais.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: fontSizes.medium,
    color: colors.muted,
    textAlign: 'center',
  },
});
