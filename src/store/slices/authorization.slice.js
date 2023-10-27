import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: { isAdmin: false },
  reducers: {
    setIsAdminStatus(state, action) {
      const { isAdmin } = action.payload;

      state.isAdmin = isAdmin;
    },
  },
});

export const { setIsAdminStatus: setIsAdminStatusAction } =
  authorizationSlice.actions;

export default authorizationSlice;
