import { useMemo, useState } from 'react';
import { questions } from '../data/questions';
import type { Question } from '../types/quiz';

export function useQuiz(questionBank: Question[] = questions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questionBank[currentIndex];
  const totalQuestions = questionBank.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const progress = useMemo(
    () => `${currentIndex + 1}/${totalQuestions}`,
    [currentIndex, totalQuestions],
  );
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

  return {
    currentQuestion,
    currentIndex,
    selectedIndex,
    score,
    answered,
    isFinished,
    progress,
    totalQuestions,
    chooseAnswer,
    nextQuestion,
    restartQuiz,
  };
}
