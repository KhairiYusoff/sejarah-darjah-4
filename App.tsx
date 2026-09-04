import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

type Question = {
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

const questions: Question[] = [
  {
    prompt: 'Apakah maksud sejarah?',
    options: [
      'Cerita rekaan tentang masa hadapan',
      'Peristiwa yang benar-benar berlaku pada masa lalu',
      'Senarai tempat pelancongan terkenal',
      'Lukisan tentang kehidupan moden',
    ],
    answerIndex: 1,
    explanation: 'Sejarah ialah peristiwa benar yang berlaku pada masa lalu dan boleh dijadikan pengajaran.',
  },
  {
    prompt: 'Sumber sejarah yang diperoleh melalui tinggalan fizikal seperti bangunan dan artifak dikenali sebagai...',
    options: ['Sumber primer', 'Sumber lisan', 'Sumber sekunder', 'Sumber imaginasi'],
    answerIndex: 0,
    explanation: 'Sumber primer ialah bukti asal seperti artifak, manuskrip, bangunan lama, dan dokumen rasmi.',
  },
  {
    prompt: 'Mengapakah kita perlu mempelajari sejarah keluarga?',
    options: [
      'Untuk menghafal semua tarikh lahir jiran',
      'Untuk mengenali asal usul dan menghargai ahli keluarga',
      'Untuk memilih permainan kegemaran',
      'Untuk melupakan peristiwa lama',
    ],
    answerIndex: 1,
    explanation: 'Sejarah keluarga membantu kita memahami asal usul, hubungan kekeluargaan, dan nilai yang diwarisi.',
  },
  {
    prompt: 'Antara berikut, yang manakah contoh sumber lisan?',
    options: ['Temu bual dengan datuk', 'Batu bersurat', 'Muzium negara', 'Buku teks'],
    answerIndex: 0,
    explanation: 'Sumber lisan diperoleh melalui percakapan, cerita, atau temu bual dengan orang yang mengetahui sesuatu peristiwa.',
  },
  {
    prompt: 'Apakah kepentingan menghargai tokoh tempatan?',
    options: [
      'Supaya kita tidak perlu belajar lagi',
      'Supaya jasa dan sumbangan mereka menjadi teladan',
      'Supaya semua tempat ditukar nama',
      'Supaya cerita lama tidak disimpan',
    ],
    answerIndex: 1,
    explanation: 'Tokoh tempatan memberi sumbangan kepada masyarakat, jadi jasa mereka wajar dikenang dan dicontohi.',
  },
];

export default function App() {
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
    if (!answered) {
      return;
    }

    if (isLastQuestion) {
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
        <View style={styles.header}>
          <Text style={styles.kicker}>Sejarah Darjah 4</Text>
          <Text style={styles.title}>Kuiz Bijak Sejarah</Text>
          <Text style={styles.subtitle}>Jawab soalan, semak penerangan, dan cuba capai markah penuh.</Text>
        </View>

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

        <View style={styles.card}>
          <Text style={styles.question}>{currentQuestion.prompt}</Text>

          <View style={styles.options}>
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedIndex === optionIndex;
              const isCorrect = currentQuestion.answerIndex === optionIndex;
              const showCorrect = answered && isCorrect;
              const showWrong = answered && isSelected && !isCorrect;

              return (
                <Pressable
                  accessibilityRole="button"
                  disabled={answered}
                  key={option}
                  onPress={() => chooseAnswer(optionIndex)}
                  style={({ pressed }) => [
                    styles.optionButton,
                    pressed && styles.optionPressed,
                    showCorrect && styles.correctOption,
                    showWrong && styles.wrongOption,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      (showCorrect || showWrong) && styles.answeredOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {answered ? (
            <View style={styles.feedback}>
              <Text style={styles.feedbackTitle}>
                {selectedIndex === currentQuestion.answerIndex ? 'Tepat!' : 'Belum tepat'}
              </Text>
              <Text style={styles.feedbackText}>{currentQuestion.explanation}</Text>
            </View>
          ) : null}
        </View>

        {isFinished ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Keputusan Akhir</Text>
            <Text style={styles.resultScore}>
              {score} / {questions.length}
            </Text>
            <Text style={styles.resultText}>
              {score === questions.length
                ? 'Hebat! Semua jawapan betul.'
                : 'Teruskan ulang kaji dan cuba sekali lagi.'}
            </Text>
            <Pressable accessibilityRole="button" onPress={restartQuiz} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Mula Semula</Text>
            </Pressable>
          </View>
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
  card: {
    gap: 18,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  question: {
    color: '#17324d',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 30,
  },
  options: {
    gap: 10,
  },
  optionButton: {
    borderWidth: 2,
    borderColor: '#d8e2ec',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f8fbfd',
  },
  optionPressed: {
    transform: [{ scale: 0.99 }],
  },
  correctOption: {
    borderColor: '#1f8a5b',
    backgroundColor: '#1f8a5b',
  },
  wrongOption: {
    borderColor: '#c2412d',
    backgroundColor: '#c2412d',
  },
  optionText: {
    color: '#17324d',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  answeredOptionText: {
    color: '#ffffff',
  },
  feedback: {
    borderLeftWidth: 4,
    borderLeftColor: '#f7c948',
    gap: 5,
    paddingLeft: 12,
  },
  feedbackTitle: {
    color: '#17324d',
    fontSize: 18,
    fontWeight: '800',
  },
  feedbackText: {
    color: '#52677a',
    fontSize: 15,
    lineHeight: 22,
  },
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
  disabledButton: {
    opacity: 0.45,
  },
  primaryButtonText: {
    color: '#17324d',
    fontSize: 17,
    fontWeight: '800',
  },
});
