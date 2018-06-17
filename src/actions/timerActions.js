//  Action once timer is done.
export const increaseCount = type => dispatch => {
  //  type -> some type of counter
  const currentCount = localStorage.getItem(type);
  const newCount = parseInt(currentCount, 10) + 1;
  localStorage.setItem(type, newCount);
};
