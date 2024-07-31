import { createSlice } from "@reduxjs/toolkit"


const initialState =  {
    items : [],
    totalQuantity : 0,
    totalAmount : 0
}

const   cartSlice = createSlice({
name : "cart",
initialState,
reducers : {
    addToCart :(state, action) => {
        const index =state.items.findIndex(item=> item.id ===action.payload.id)
        if( index >=0 ){
            state.items[index].quantity +=1
        } else {
            const newItem = {...action.payload , quantity:1}
            state.items.push(newItem)
            state.totalQuantity +=1
        }
        state.totalAmount +=action.payload.price 
    } ,
    removeFromCart : (state,action) => {
        const index =state.items.findIndex(item=> item.id ===action.payload)
            state.totalQuantity -=1
            state.totalAmount -= (state.items[index].price * state.items[index.quantity])
            state.items.splice(index , 1)

    },
    changeQuantity : (state, action) => {
        const index = state.items.findIndex(item => item.id ===items.id)
        if(quantity > 0){

            
            state.items[index].quantity +=1
        } else {
            state.items = (state.items).filter(item => item.id === items.id)
        }
    }
},
})
export const {addToCart, removeFromCart , changeQuantity} =  cartSlice.actions
export default cartSlice.reducer