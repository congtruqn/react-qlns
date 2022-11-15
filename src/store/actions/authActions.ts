import { Dispatch } from 'redux';
type Token = {
    access: string;
};
export function fetchTokenSuccess(comments: string) {
    return {
      type: "FETCH_COMMENTS_SUCCESS",
      access: comments,
    };
  }
export const fetchTokens = () => async (dispatch: Dispatch) => {
    try {
      const accessTokens = localStorage.getItem("access");
      dispatch(fetchTokenSuccess(accessTokens));
    } catch (error) {
      console.log('error', error);
    }
};