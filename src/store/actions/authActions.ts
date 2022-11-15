import { AnyAction, Dispatch } from 'redux';
import FarmService from "../../services/farms/farm.service"
import { RootState } from '../reducers/combine';
type Product = {
    access: string;
};
export function fetchTokenSuccess(comments: string) {
    return {
      type: "FETCH_COMMENTS_SUCCESS",
      access: comments,
    };
  }
  const setProducts = (products: Product[]) => {
    return {
      type:"products/SET_PRODUCTS",
      products: products
    };
  };
  export const loadProducts = () => {
    return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
      setTimeout(() => {
        dispatch(
          setProducts([...getState().products.products, ...sampleProducts])
        );
      }, 500);
    };
  };

