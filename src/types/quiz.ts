export type Question = {
  id: string;
  unit: number;
  subtopic: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};
