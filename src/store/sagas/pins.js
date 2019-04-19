import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PinActions } from '../ducks/pins';

export function* addPin(action) {
  try {
    console.tron.log(action);
    const { data } = yield call(api.get, `/users/${action.payload.data.user}`);

    const isDuplicated = yield select(state => state.pins.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(PinActions.addPinFailure('erro'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        latitude: action.payload.data.viewport.latitude,
        longitude: action.payload.data.viewport.longitude,
      };

      yield put(PinActions.addPinSuccess(userData));
    }
  } catch (error) {
    yield put(PinActions.addPinFailure('erro'));
  }
}
