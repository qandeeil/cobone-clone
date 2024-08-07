import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IInitialState, IProduct} from './interfaces';

const initialState: IInitialState = {
  isLoading: false,
  isError: '',
  products: [] as IProduct[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartThunk: (state, action: PayloadAction<IProduct>) => {
      const productIndex = state.products.findIndex(
        product => product._id === action.payload._id,
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({...action.payload, quantity: 1});
      }
    },
    removeFromCartThunk: (state, action: {payload: {_id: string}}) => {
      const productIndex = state.products.findIndex(
        product => product._id === action.payload._id,
      );
      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity -= 1;
        } else {
          state.products.splice(productIndex, 1);
        }
      }
    },
  },
  extraReducers(builder) {},
});

export const {addToCartThunk, removeFromCartThunk} = cartSlice.actions;
export default cartSlice.reducer;
