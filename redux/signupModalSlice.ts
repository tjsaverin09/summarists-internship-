import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignupModalState {
  isOpen: boolean,
}

const initialState: SignupModalState = {
  isOpen: false,
}

export const signupModalSlice = createSlice({
  name: 'signupModal',
  initialState,
  reducers: {
    openSignupModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true
    },
    closeSignupModal: (state) => {
      state.isOpen = false
    },
    toggleSignupModal: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { openSignupModal, closeSignupModal, toggleSignupModal } = signupModalSlice.actions

export default signupModalSlice.reducer