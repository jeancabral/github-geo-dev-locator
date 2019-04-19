import { all, takeLatest } from 'redux-saga/effects';

import { Types as PinTypes } from '../ducks/pins';

import { addPin, delPin } from './pins';

export default function* rootSaga() {
  yield all([takeLatest(PinTypes.ADD_REQUEST, addPin), takeLatest(PinTypes.DEL_REQUEST, delPin)]);
}
