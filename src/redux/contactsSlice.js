import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [{
    id: 1,
    name: "Alex Bolduin",
    number: "0675438032"
}];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        delContact: {
            reducer(state, action) {
                return state.filter(contact => contact.id !== action.payload)
          }
        }
    }
})

export const { addContact, delContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
