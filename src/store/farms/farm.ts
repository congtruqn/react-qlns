const GET_LIST_FARM = "GET_LIST_FARM";
const SELECT_FARM = "SELECT_FARM";



const user = localStorage.getItem("access");
  
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
  
const farmReducer =  (state : any = initialState, action : any) : any => {
    const { type, payload } = action;
    switch (type) {
      case GET_LIST_FARM:
        return {
          ...state,
          isLoggedIn: false,
        };
      case SELECT_FARM:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  }
  export default farmReducer;