import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import ResultCard from '../components/ResultCard';
import { useQuiz } from '../hooks/useQuiz';

export default function QuizScreen() {
  const {
    currentQuestion,
    progress,
    score,
    selectedIndex,
    answered,
    isFinished,
    totalQuestions,
    chooseAnswer,
    nextQuestion,
    restartQuiz,
  } = useQuiz();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Header />

        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Soalan</Text>
            <Text style={styles.summaryValue}>{progress}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Markah</Text>
            <Text style={styles.summaryValue}>{score}</Text>
          </View>
        </View>

        <QuestionCard
          question={currentQuestion}
          selectedIndex={selectedIndex}
          answered={answered}
          onChooseAnswer={chooseAnswer}
        />

        {isFinished ? (
          <ResultCard score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />
        ) : (
          <Pressable
            accessibilityRole="button"
            disabled={!answered}
            onPress={nextQuestion}
            style={[styles.primaryButton, !answered && styles.disabledButton]}
          >
            <Text style={styles.primaryButtonText}>Soalan Seterusnya</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#17324d',
  },
  container: {
    flexGrow: 1,
    gap: 18,
    padding: 20,
    backgroundColor: '#17324d',
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryItem: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#244b6c',
    padding: 16,
  },
  summaryLabel: {
    color: '#b8d1e7',
    fontSize: 13,
    fontWeight: '600',
  },
  summaryValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 4,
  },
  primaryButton: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#f7c948',
    padding: 16,
  },
  disabledButton: {
    opacity: 0.45,
  },
  primaryButtonText: {
    color: '#17324d',
    fontSize: 17,
    fontWeight: '800',
  },
});