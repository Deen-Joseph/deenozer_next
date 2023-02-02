import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    id : ""
}
 const searchIdSlice = createSlice({
    name:"searchId",
    initialState,
    reducers:{
        searchId: (state,action)=>{
            state.id = state.count1 + 1 
        },  
       
    }
})

export default searchIdSlice.reducer
export const {searchId} = searchIdSlice.actions

