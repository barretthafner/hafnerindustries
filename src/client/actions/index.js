export const types = {
  clickTest: "CLICK_TEST",
  changeLocation: "CHANGE_LOCATION",

};

export const clickTest = (target) => {
  return {
    type: types.clickTest,
    payload: { target }
  }
};

export const changeLocation = () => {
  return {
    type: types.changeLocation,
    payload: { null }
  }
}
