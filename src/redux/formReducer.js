import axios from "axios";

export const USER_SUBMIT = "USER_SUBMIT";
export const USER_SUBMIT_SUCSESS = "USER_SUBMIT_SUCSESS";
export const USER_SUBMIT_FAILURE = "USER_SUBMIT_FAILURE";

const initialState = {
  isSubmitted: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    organization: "",
    advances: false,
    alerts: false,
    other: false,
  },
  // error set to null initially
  error: null,
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SUBMIT:
      return { ...state, user: payload, isSubmitted: true };
    case USER_SUBMIT_SUCSESS:
      return { ...state, user: payload };
    case USER_SUBMIT_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export const submitUser = (userObj) => ({
  type: USER_SUBMIT,
  payload: userObj,
});

export const postUser = (userObj) => (dispatch) => {
  axios
    .post(`http://localhost:3000/users`, { userObj })
    .then((res) => {
      dispatch({ type: USER_SUBMIT_SUCSESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: USER_SUBMIT_FAILURE, payload: error.message });
    });
};
