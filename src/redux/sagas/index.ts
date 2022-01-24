import { all } from 'redux-saga/effects';
import moviesSagas from './movies';

export default function* rootSagas() {
  yield all([
    moviesSagas()
  ]);
}
