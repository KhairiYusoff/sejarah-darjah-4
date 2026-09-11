import { Pressable, StyleSheet, Text } from 'react-native';

type OptionButtonProps = {
  option: string;
  isSelected: boolean;
  isCorrect: boolean;
  answered: boolean;
  onPress: () => void;
};

export default function OptionButton({
  option,
  isSelected,
  isCorrect,
  answered,
  onPress,
}: OptionButtonProps) {
  const showCorrect = answered && isCorrect;
  const showWrong = answered && isSelected && !isCorrect;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={answered}
      onPress={onPress}
      style={({ pressed }) => [
        styles.optionButton,
        pressed && styles.optionPressed,
        showCorrect && styles.correctOption,
        showWrong && styles.wrongOption,
      ]}
    >
      <Text style={[styles.optionText, (showCorrect || showWrong) && styles.answeredOptionText]}>
        {option}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});