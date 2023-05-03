import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        allUsers: [],
    },
    reducers: {
        addUser(state, action) {
            state.allUsers.push(action.payload);
        },
        removeUser(state, action) {
            state.allUsers = state.allUsers.filter(
                (user) => user.id !== action.payload
            );
        },

    },
});

export const userActions = userSlice.actions;
const store = configureStore({
    reducer: { user: userSlice.reducer },
});

export default store;