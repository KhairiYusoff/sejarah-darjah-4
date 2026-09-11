import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { questions } from '../data/questions';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import ResultCard from '../components/ResultCard';

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const progress = useMemo(() => `${currentIndex + 1}/${questions.length}`, [currentIndex]);
  const isFinished = answered && isLastQuestion;

  function chooseAnswer(optionIndex: number) {
    if (answered) {
      return;
    }

    setSelectedIndex(optionIndex);
    setAnswered(true);

    if (optionIndex === currentQuestion.answerIndex) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function nextQuestion() {
    if (!answered || isLastQuestion) {
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedIndex(null);
    setAnswered(false);
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setAnswered(false);
  }

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
          <ResultCard
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
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