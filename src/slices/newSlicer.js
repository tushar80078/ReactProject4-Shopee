import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../thunk/api_thunk";

const initialState = {
    data: [],
    totalCartItems: 0,
    cartItems: [],
    details:[]

}

const newSlicer = createSlice(
    {
        name: "newSlicer",
        initialState,
        reducers: {

            addToCart: (state, action) => {
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);
                if (existingItem) {
                    existingItem.quantity++;

                }
                else {

                    state.cartItems.push({ ...action.payload, quantity: 1 });
                    state.totalCartItems = state.totalCartItems + 1;
                }

            },

            addMore: (state, action) => {
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);

                existingItem.quantity++;

                state.cartItems = state.cartItems.map(item => {
                    if (item.id === existingItem.id) {
                        return existingItem;
                    }
                    return item;
                });
            },

            removeFromCart: (state, action) => {
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);

                if (existingItem.quantity >= 1) {
                    existingItem.quantity--;
                    if (existingItem.quantity === 0) {
                        state.totalCartItems--;
                        state.cartItems = state.cartItems.filter(item => item.id !== existingItem.id);
                    } else {
                        state.cartItems = state.cartItems.map(item => {
                            if (item.id === existingItem.id) {
                                return existingItem;
                            }
                            return item;
                        });
                    }
                }
            },
            showDetails:(state,action)=>{
                    state.details=action.payload;
            }
        },

        extraReducers: (builder) => {

            //this call will happen automatically by thunk

            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                // console.log("here", action.payload);
                //debugger;
                state.data = action.payload.data;
            })

            builder.addCase(fetchPosts.rejected, (state, action) => {
                // state.data=action.payload.data;
                // debugger;
            })

            builder.addCase(fetchPosts.pending, (state, action) => {
                // state.data=action.payload.data;
                //  debugger;
            })


        }
    }
)

export const { addToCart, addMore, removeFromCart,showDetails } = newSlicer.actions;
export default newSlicer.reducer;