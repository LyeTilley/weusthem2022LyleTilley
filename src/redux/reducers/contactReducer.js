const initialState = [
  { id: 0, name: "Lyle Tilley", email: "lyle@email.com", phone: 9028774470 },
  { id: 1, name: "Ashwin Og ", email: "test@test.com", phone: 9999999999},
  { id: 2, name: "We UsThem ", email: "test@test.com", phone: 9999999999},
  { id: 3, name: "We UsThem 2 ", email: "test@test.com", phone: 9999999999},
  { id: 4, name: "We UsThem 3 ", email: "test@test.com", phone: 9999999999},
  { id: 5, name: "We UsThem 4 ", email: "test@test.com", phone: 9999999999},
];








export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null, image: null }];
      return state;
    default:
      return state;
  }
};
