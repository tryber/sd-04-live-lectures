export const addRegister = (value) => (
  {
    type: 'ADD_REGISTER',
    data: value
  }
);

export const deleteRegister = (value) => (
  {
    type: 'DELETE_REGISTER',
    value
  }
);

export const login = (value) => (
  {
    type: 'LOGIN',
    value
  }
);
