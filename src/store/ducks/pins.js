/**
|--------------------------------------------------
| Act. Types
|--------------------------------------------------
*/

export const Types = {
  ADD_REQUEST: 'pins/ADD_REQUEST',
  ADD_FAILURE: 'pins/ADD_FAILURE',
  ADD_SUCCESS: 'pins/ADD_SUCCESS',
};

/**
  |--------------------------------------------------
  | Reducer
  |--------------------------------------------------
  */

const INITIAL_SATE = {
  loading: false,
  data: [],
  error: null,
  success: null,
};

export default function pins(state = INITIAL_SATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state, error: null, success: null, loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: 'success',
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

/**
    |--------------------------------------------------
    | Actions
    |--------------------------------------------------
    */

export const Creators = {
  addPinRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),

  // request --> saga --> chamada api --> success

  addPinSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addPinFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
