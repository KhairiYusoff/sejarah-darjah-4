import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.kicker}>Sejarah Darjah 4</Text>
      <Text style={styles.title}>Kuiz Bijak Sejarah</Text>
      <Text style={styles.subtitle}>Jawab soalan, semak penerangan, dan cuba capai markah penuh.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 8,
    paddingTop: 20,
  },
  kicker: {
    color: '#f7c948',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
  },
  subtitle: {
    color: '#d6e4f0',
    fontSize: 16,
    lineHeight: 23,
  },
});