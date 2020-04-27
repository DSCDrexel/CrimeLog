export default (state = {}, action) => {
  switch (action.type) {
    case "CRIME_DATA":
      return {
        ...state,
        crimeData: action.payload
      };

    default:
      return state;
  }
};
