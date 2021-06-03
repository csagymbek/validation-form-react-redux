const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  residence: ["CA", "WA", "TX", "NY", "AL"],
};
export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
