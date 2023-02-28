import { BASE_URL } from "../../Constants/api.constants";

export function fetchProducts() {
  return fetch(`${BASE_URL}/products`);
}

export function fetchProductsById(id:string) {
  return fetch(`${BASE_URL}/products/${id}`);
}
