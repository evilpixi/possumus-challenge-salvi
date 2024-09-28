import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../dto/question';

interface GameState 
{
  questions: Question[];
  currentQuestionIndex: number;
  answerHistory: (boolean | null)[];
  gameEnd: boolean;
}

const initialState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  answerHistory: [null, null, null, null, null],
  gameEnd: false
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>)
    {
      state.questions = action.payload;
    },
    answerQuestion(state, action: PayloadAction<{ answer: string }>)
    {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = action.payload.answer === currentQuestion.correct_answer;

      state.answerHistory[state.currentQuestionIndex] = isCorrect;
    },
    nextQuestion(state)
    {
      if (state.currentQuestionIndex < state.questions.length - 1)
      {
        state.currentQuestionIndex++;
      }
      else
      {
        state.gameEnd = true;
      }
    },
    resetGame(state)
    {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.answerHistory = [null, null, null, null, null];
      state.gameEnd = false;
    }
  }
});

export const { setQuestions, answerQuestion, nextQuestion, resetGame } = gameSlice.actions;
export default gameSlice.reducer;