import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { colors, spacing, fontSizes } from '../../utils/theme';

export default function Developers() {
  return (
    <View style={styles.container}>
      <Header title="Desenvolvedores" />
      <View style={styles.content}>
        <Text style={styles.name}>Criado por:</Text>
        <Text style={styles.dev}>• Seu Nome Aqui</Text>
        <Text style={styles.dev}>• Outro Nome</Text>
        <Text style={styles.year}>Turma CP2 – 2025</Text>
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
  },
  name: {
    fontSize: fontSizes.large,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
  dev: {
    fontSize: fontSizes.medium,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  year: {
    marginTop: spacing.lg,
    fontSize: fontSizes.small,
    color: colors.muted,
  },
});
