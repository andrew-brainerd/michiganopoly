import { START_GAME } from '../actions/game';

const initialState = {
  isPlaying: false
};

export default function sync (state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isPlaying: true
      };
    default:
      return state;
  }
}
