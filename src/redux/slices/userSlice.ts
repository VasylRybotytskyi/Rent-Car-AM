// import { IMe, IUserState } from "@/types/Users";
// import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { tokenApi } from "../services/tokenApi";
// import { usersApi } from "../services/usersApi";

// const initialState: IUserState = {
//   isAuthenticate: false,
//   me: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logout: () => initialState,
//     setMe: (state, action: PayloadAction<IMe>) => {
//       state.me = action.payload;
//     },
//   },
// });

// const { actions, reducer } = userSlice;

// export const { logout, setMe } = actions;

// export default reducer;
