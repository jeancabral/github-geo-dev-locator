import { all, takeLatest } from 'redux-saga/effects';

import { Types as PinTypes } from '../ducks/pins';

import { addPin } from './pins';

export default function* rootSaga() {
  yield all([takeLatest(PinTypes.ADD_REQUEST, addPin)]);
}
