import { configureStore } from '@reduxjs/toolkit';
import compartirSlice from './compartirSlice';
import currentSlice from './currentSlice';
import escritaSlice from './escrituraSlice';
import lecturaSlice from './lecturaSlice';

export const store = configureStore({
  reducer: {
    lectura: lecturaSlice,
    escritura: escritaSlice,
    compartir: compartirSlice,
    current: currentSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
