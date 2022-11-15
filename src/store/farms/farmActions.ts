import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../reducers/combine';
import FarmService from "../../services/farms/farm.service";
type Product = {
  access: string;
};
export function fetchTokenSuccess(comments: string) {
    return {
      type: "GET_LIST_FARM",
      access: comments,
    };
  }
export const fetchFarms = () =>  (dispatch: Dispatch) => {
    console.log('111')
    try {
      const accessTokens = localStorage.getItem("access");
      console.log(accessTokens)
      dispatch(fetchTokenSuccess(accessTokens));
      return Promise.resolve();
    } catch (error) {
      console.log('error', error);
      return Promise.reject();
    }
};
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
        setProducts([...getState().auths, ...sampleProducts])
      );
    }, 500);
  };
};
