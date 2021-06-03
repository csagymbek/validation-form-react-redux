export const USER_SUBMIT = "USER_SUBMIT";

const initialState = {
  residence: null,
  isSubmitted: false,
  user: null,
};

export const submitUser = (userObj) => ({
  type: USER_SUBMIT,
  payload: userObj,
});

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SUBMIT:
      return { ...state, user: payload, isSubmitted: true };
    default:
      return state;
  }
};
