export const _clickTest = "CLICK_TEST";

export const clickTest = (target) => {
  return {
    type: _clickTest,
    payload: { target }
  }
};
