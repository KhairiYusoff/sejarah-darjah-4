import { Pressable, StyleSheet, Text, View } from 'react-native';

type ResultCardProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export default function ResultCard({ score, totalQuestions, onRestart }: ResultCardProps) {
  return (
    <View style={styles.resultCard}>
      <Text style={styles.resultTitle}>Keputusan Akhir</Text>
      <Text style={styles.resultScore}>
        {score} / {totalQuestions}
      </Text>
      <Text style={styles.resultText}>
        {score === totalQuestions
          ? 'Hebat! Semua jawapan betul.'
          : 'Teruskan ulang kaji dan cuba sekali lagi.'}
      </Text>
      <Pressable accessibilityRole="button" onPress={onRestart} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Mula Semula</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  resultCard: {
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    backgroundColor: '#f7c948',
    padding: 20,
  },
  resultTitle: {
    color: '#17324d',
    fontSize: 18,
    fontWeight: '800',
  },
  resultScore: {
    color: '#17324d',
    fontSize: 42,
    fontWeight: '900',
  },
  resultText: {
    color: '#17324d',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButton: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#f7c948',
    padding: 16,
  },
  primaryButtonText: {
    color: '#17324d',
    fontSize: 17,
    fontWeight: '800',
  },
});