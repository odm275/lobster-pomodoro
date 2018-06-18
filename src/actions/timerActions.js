// @desc Gets a string from the localStorage;
// sets up an array depending on the string;
// then addes a new Date();

export const increaseCount = type => dispatch => {
  const currentCounts = localStorage.getItem(type); //Be getting a string that's an array
  let currentCountsArray;
  if (!currentCounts) {
    currentCountsArray = [];
  } else {
    currentCountsArray = currentCounts.split(",");
  }
  const newCounts = [...currentCountsArray, Date.now().toString()];
  localStorage.setItem(type, newCounts.join());
};
