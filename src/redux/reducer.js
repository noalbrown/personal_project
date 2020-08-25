import axios from 'axios';

const initialState = {
  user: { userId: 0, email: '' }
};

const GET_USER = 'GET_USER';
export function getUser() {
  const user = axios
    .get('./auth/user')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return {
    type: GET_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER + '_REJECTED':
      return state;
    case GET_USER + '_FULFILLED':
      if (payload) {
        return { ...state, user: payload };
      } else return state;
    case GET_USER + '_PENDING':
      return state;
    default:
      return state;
  }
}