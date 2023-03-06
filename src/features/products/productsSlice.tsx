import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsById } from "./productAPI";
export interface ProductsState {
  products: any;
  status: boolean;
  productsById: any;
  StatusById: boolean;
  cart: any;
}
const initialState: ProductsState = {
  products: [],
  cart: [],
  status: false,
  productsById: {},
  StatusById: false,
};
// API Call is done after dispatching the action from /pages/homepage/ component
export const productsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response.json();
  }
);

export const productsByIdAsync = createAsyncThunk(
  "products/fetchProductsById",
  async (id: any) => {
    const response = await fetchProductsById(id);
    return response.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(productsAsync.pending, (state) => {
      state.status = true;
    });
    builder.addCase(productsAsync.fulfilled, (state, action) => {
      console.log('first', action)
      state.status = false;
      state.products = action.payload;
    });
    builder.addCase(productsAsync.rejected, (state) => {
      state.status = false;
    });
    builder.addCase(productsByIdAsync.pending, (state) => {
      state.StatusById = true;
    });
    builder.addCase(productsByIdAsync.fulfilled, (state, action) => {
      state.StatusById = false;
      state.productsById = action.payload;
    });
    builder.addCase(productsByIdAsync.rejected, (state) => {
      state.StatusById = false;
    });
  },
});
export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
