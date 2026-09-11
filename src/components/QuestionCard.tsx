import { StyleSheet, Text, View } from 'react-native';
import type { Question } from '../types/quiz';
import OptionButton from './OptionButton';

type QuestionCardProps = {
  question: Question;
  selectedIndex: number | null;
  answered: boolean;
  onChooseAnswer: (optionIndex: number) => void;
};

export default function QuestionCard({
  question,
  selectedIndex,
  answered,
  onChooseAnswer,
}: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.prompt}</Text>

      <View style={styles.options}>
        {question.options.map((option, optionIndex) => (
          <OptionButton
            key={option}
            option={option}
            isSelected={selectedIndex === optionIndex}
            isCorrect={question.answerIndex === optionIndex}
            answered={answered}
            onPress={() => onChooseAnswer(optionIndex)}
          />
        ))}
      </View>

      {answered ? (
        <View style={styles.feedback}>
          <Text style={styles.feedbackTitle}>
            {selectedIndex === question.answerIndex ? 'Tepat!' : 'Belum tepat'}
          </Text>
          <Text style={styles.feedbackText}>{question.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
});