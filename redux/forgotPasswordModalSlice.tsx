import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ForgotPasswordModalState {
  isOpen: boolean,
}

const initialState: ForgotPasswordModalState = {
  isOpen: false,
}

export const forgotPasswordModalSlice = createSlice({
  name: 'forgotPasswordModal',
  initialState,
  reducers: {
    openForgotPasswordModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true
    },
    closeForgotPasswordModal: (state) => {
      state.isOpen = false
    },
    toggleForgotPasswordModal: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { openForgotPasswordModal, closeForgotPasswordModal, toggleForgotPasswordModal } = forgotPasswordModalSlice.actions

export default forgotPasswordModalSlice.reducer