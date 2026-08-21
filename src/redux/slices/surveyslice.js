import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
}

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data?.push(payload)
    },
    removeData: (state, {payload}) => {
     state.data = state.data.filter((e)=> e.name !== payload )
    }

  }

})

export const { addData, removeData } = surveySlice.actions
export default surveySlice.reducer
