const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case "AUTH":
      console.log("Inside auth reducer");
      break;
  
    default:
      break;
  }
  return state;
}
export default authReducer;