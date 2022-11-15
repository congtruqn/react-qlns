import { Dispatch } from 'redux';
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