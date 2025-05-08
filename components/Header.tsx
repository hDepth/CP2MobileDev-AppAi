import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSizes, spacing } from '../utils/theme';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: fontSizes.xlarge,
    color: colors.accent,
    fontWeight: 'bold',
  },
});
