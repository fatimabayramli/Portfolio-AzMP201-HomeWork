function reducer(state, action) {
  switch (action.type) {
    case "setData":
      return { ...state, data: action.data };
    case "deleteData":
      let filter = state.data.filter((item) => item.id != action.id);
      return { ...state, data: filter };
    case "editData":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.data.id) {
            return { ...item, ...action.data.formData };
          }
          return item;
        }),
      };
    default:
      break;
  }
}

export default reducer;
