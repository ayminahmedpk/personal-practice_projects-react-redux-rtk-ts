import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';


import { globalActions } from '../global/global';


type User = {
  id   : number;
  name : string;
}


type UserState = {
  loading : boolean;
  users   : User[];
  error   : string;
}


const initialState: UserState = {
  loading : false ,
  users   : []    ,
  error   : ''    ,
}


// Generates action types to represent promise state - pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => (
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
));


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // gave an error if reducers property didn't exist
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false          ;
      state.users   = action.payload ;
      state.error   = ''             ;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false                                          ;
      state.users   = []                                             ;
      state.error   = action.error.message || 'something went wrong' ; 
      // state.error   = action.error.message! ; // going to exist for sure
    })
    builder.addCase(globalActions.reset, (state) => {
      return initialState;
    })
  }
})

export const userReducer = userSlice.reducer;