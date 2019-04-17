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
  data: [
    {
      login: 'jeancabral',
      id: 2077886,
      avatar_url: 'https://avatars0.githubusercontent.com/u/2077886?v=4',
      name: 'Jean Cabral',
      latitude: -10.9187232,
      longitude: -37.0467422,
    },
    {
      login: 'diego3g',
      id: 2254731,
      avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      latitude: -10.91606,
      longitude: -37.049932,
    },
    {
      login: 'ViniciusColares',
      id: 7424286,
      avatar_url: 'https://avatars2.githubusercontent.com/u/7424286?v=4',
      name: 'Vinicius Colares',
      latitude: -10.91506,
      longitude: -37.049832,
    },
  ],
  error: null,
};

export default function pins(state = INITIAL_SATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
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
  addPinRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
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
