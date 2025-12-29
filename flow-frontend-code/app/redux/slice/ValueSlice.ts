import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

const valueSlice = createSlice({
  name: 'value',
  initialState,
    reducers: {
    toggleOpen(state, action: PayloadAction<boolean>) {
        state.isOpen = action.payload
    },
    },
})
export const { toggleOpen } = valueSlice.actions
export default valueSlice.reducer