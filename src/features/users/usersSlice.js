import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Jay Baron' },
    { id: '1', name: 'Ayah Joan' },
    { id: '2', name: 'Joel Ajiola' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer