import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { colors, spacing, fontSizes } from '../../utils/theme';

export default function ImageAnalysis() {
  return (
    <View style={styles.container}>
      <Header title="Análise de Imagem" />
      <View style={styles.content}>
        <Text style={styles.text}>
          Aqui você poderá enviar imagens e obter uma análise feita por IA.
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
  text: {
    fontSize: fontSizes.medium,
    color: colors.text,
    textAlign: 'center',
  },
});
