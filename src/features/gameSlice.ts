import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../dto/question';

interface GameState 
{
  questions: Question[];
  currentQuestionIndex: number;
  answerHistory: (boolean | null)[];
}

const initialState: GameState = {
  questions: [],
  currentQuestionIndex: 0,
  answerHistory: [null, null, null, null, null],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>)
    {
      state.questions = action.payload;
    },
    answerQuestion(state, action: PayloadAction<{ questionIndex: number, isCorrect: boolean }>)
    {
      state.answerHistory[action.payload.questionIndex] = action.payload.isCorrect;
      if (state.currentQuestionIndex < state.questions.length - 1)
      {
        state.currentQuestionIndex++;
      }
    },
    resetGame(state)
    {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.answerHistory = [null, null, null, null, null];
    }
  }
});

export const { setQuestions, answerQuestion, resetGame } = gameSlice.actions;
export default gameSlice.reducer;