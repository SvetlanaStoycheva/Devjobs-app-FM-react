const reducer = (state, action) => {
  if (action.type === 'UPDATE_FILTER') {
    let [name, value] = action.payload;
    if (name === 'fulltime') {
      console.log(name, value);
    }
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
