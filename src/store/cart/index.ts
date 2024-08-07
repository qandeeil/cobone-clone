import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IInitialState, IProduct, IOptions} from './interfaces';
import productsData from '../../../assets/json/products.json';

const initialState: IInitialState = {
  isLoading: false,
  isError: '',
  products: [] as IProduct[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartThunk: (
      state,
      action: PayloadAction<{product_id: string; optionId?: string}>,
    ) => {
      const {product_id, optionId} = action.payload;
      const product = productsData.find(p => p._id === product_id);
      if (!product) return;

      // Find the index of the product in the cart, considering selectedOption
      const productIndex = state.products.findIndex(
        p => p._id === product_id && p.selectedOption?._id === optionId,
      );

      if (optionId) {
        // Find the selected option from the product data
        const selectedOption = product.options?.find(o => o._id === optionId);

        if (productIndex !== -1) {
          // Product is already in the cart
          if (selectedOption) {
            // Update quantity of the existing selectedOption
            state.products[productIndex].selectedOption!.quantity += 1;
          }
        } else {
          // Create a new cart entry for this product and selectedOption
          state.products.push({
            ...product,
            selectedOption: {...selectedOption, quantity: 1}, // Add quantity here
          });
        }
      }
    },

    removeFromCartThunk: (
      state,
      action: PayloadAction<{product_id: string; optionId?: string}>,
    ) => {
      const {product_id, optionId} = action.payload;
      const productIndex = state.products.findIndex(
        p => p._id === product_id && p.selectedOption?._id === optionId,
      );

      if (productIndex !== -1) {
        if (optionId) {
          const selectedOption = state.products[productIndex].selectedOption;

          if (selectedOption) {
            if (selectedOption.quantity > 1) {
              // Decrease the quantity of the selectedOption
              selectedOption.quantity -= 1;
            } else {
              // Remove the selectedOption from the product
              state.products[productIndex].selectedOption = undefined;
              // If no options are left, remove the product from the cart
              if (!state.products[productIndex].selectedOption) {
                state.products.splice(productIndex, 1);
              }
            }
          }
        }
      }
    },
  },
  extraReducers(builder) {},
});

export const {addToCartThunk, removeFromCartThunk} = cartSlice.actions;
export default cartSlice.reducer;
