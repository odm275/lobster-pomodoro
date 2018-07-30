// @desc [d1,d2,...,dN] -> [[d1,d2],[d3], [d4,d5,d6,d7]...Dn]
// Array of dates -> Arrays of arrays of dates of the same day.
export function arrangeData(arr) {
  const datesByDay = arr.reduce((acc, d1) => {
    const pomDayCount = arr.filter(d2 => sameDay(d1, d2));
    const length = acc.length;
    if (length === 0 || !acc[length - 1].includes(d1)) {
      acc.push(pomDayCount);
      return acc;
    }
    return acc;
  }, []);
  return datesByDay;
}
// @desc Calculates the gaps between days and fills with date object
//  appropiate to that day.

export function fillInGaps(arr) {
  const arrayWithGaps = arr.reduce((acc, d, index, array) => {
    if (index + 1 < array.length) {
      const getGap = gap(d[0], array[index + 1][0]);
      acc.push(d, ...getGap);

      return acc;
    }
    acc.push(d);
    return acc;
  }, []);
  return arrayWithGaps;
}

// @Finds gap of days between d1,d2 and construct and array of those

export let gap = (d1, d2) => {
  const differenceToDays = Math.round((d2 - d1) / 1000 / 60 / 60 / 24) - 1;
  //console.log(
  //Math.round((d2 - d1) / 1000 / 60 / 60 / 24) - 1,
  //Math.floor((d2 - d1) / 1000 / 60 / 60 / 24)
  //);
  const length = differenceToDays > 0 ? differenceToDays : 0;
  const createGap = Array(length)
    .fill(d1)
    .map((d1, index) => {
      const indexPrime = index + 1;
      return addDays(d1, indexPrime);
    });
  return createGap;
};
// @desc Adds single day to Date Object. Takes into account light saving days, and more.

export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// @desc Checks if d1,d2 (date object) happened the same day.

export function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
