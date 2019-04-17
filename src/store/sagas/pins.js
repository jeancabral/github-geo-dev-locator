import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PinActions } from '../ducks/pins';

export function* addPin(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.pins.data.find(favorite => favorite.id === data.id));

    // console.tron.log(isDuplicated);

    if (isDuplicated) {
      yield put(PinActions.addPinFailure('Erro ao Adicionar!'));
    } else {
      const userData = {
        id: data.id,
        name: data.full_name,
        login: data.login,
        avatar: data.avatar_url,
        longitude: data.latitude,
        latitude: data.latitude,
      };

      yield put(PinActions.addPinSuccess(userData));
    }
  } catch (error) {
    yield put(PinActions.addPinFailure('Erro ao Adicionar!'));
  }
}
