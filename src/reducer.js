const reducer = (state, action) => {
  if (action.type === 'UPDATE_FILTER') {
    let [name, value] = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { all_companies } = state;
    const { title, location, fulltime } = state.filters;
    let tempCompanies = [...all_companies];

    if (title) {
      tempCompanies = tempCompanies.filter(
        (item) =>
          item.company.toLowerCase().startsWith(title.toLowerCase()) ||
          item.position.toLowerCase().startsWith(title.toLowerCase())
      );
    }
    if (location) {
      tempCompanies = tempCompanies.filter((item) =>
        item.location.toLowerCase().startsWith(location.toLowerCase())
      );
    }
    if (fulltime) {
      tempCompanies = tempCompanies.filter(
        (item) => item.contract === 'Full Time'
      );
    }
    if (!fulltime) {
      tempCompanies = tempCompanies.filter(
        (item) => item.contract === 'Part Time'
      );
    }
    return { ...state, filtered_companies: tempCompanies };
  }
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
