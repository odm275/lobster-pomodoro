import {
  arrangeData,
  fillInGaps,
  gap,
  addDays,
  sameDay
} from "../helpers/localStorageToChart";

describe(`localStorageToChart(str) suite`, () => {
  //  f(input) -> actual
  //  expect(f(input)).toEqual(expected)
  describe(`addsDays(date,day) Adds single day to Date Object. Takes into account light saving days, and more.`, () => {
    let date;
    const day = 1;
    let expected;
    it("`Adding one Day in common case`", () => {
      date = new Date("December 1, 1995");
      expected = new Date("December 2, 1995");
      expect(addDays(date, day)).toEqual(expected);
    });
    it("`Border Case`", () => {
      date = new Date("December 31, 1995");
      expected = new Date("January 1, 1996");
      expect(addDays(date, day)).toEqual(expected);
    });
  });
  describe(`sameDay(d1,d2) Checks if d1,d2 (date object) happened the same day.`, () => {
    let d1;
    let d2;
    it("`d1 equal to d2 here`", () => {
      d1 = new Date("January 1, 1995");
      d2 = new Date("January 1, 1995");
      expect(sameDay(d1, d2)).toEqual(true);
    });
    it("`d1 NOT equal to d2 here`", () => {
      d1 = new Date("January 1, 1995");
      d2 = new Date("January 2, 1995");
      expect(sameDay(d1, d2)).toEqual(false);
    });
  });
  describe("arrangeData(arr) suite", () => {
    it(`[d1,d2,...,dN] -> [[d1,d2],[d3], [d4,d5,d6,d7],...,Dn]`, () => {});
  });
  describe("fillInGaps(arr) suite", () => {
    it(`Puts together each gap computed by gap() in a conherent array `, () => {
      let arr = [
        new Date("January 2, 1995"),
        new Date("January 10, 1995"),
        new Date("January 16, 1995"),
        new Date("January 17, 1995"),
        new Date("January 18, 1995"),
        new Date("January 17, 1995"),
        new Date("January 17, 1995"),
        new Date("January 17, 1995"),
        new Date("January 17, 1995")
      ];
    });
  });
  describe(`gap(d1,d2) Finds gap of days between d1 and d2, and constructs and array of that respective gap [d1,d1+day, d1+2*day, ..., d1+n*day]`, () => {
    let d1;
    let d2;
    let expected;
    it(`negative gap`, () => {
      d1 = new Date("January 2, 1995");
      d2 = new Date("January 1, 1995");
      expected = [];
      expect(gap(d1, d2)).toEqual(expected);
    });
    it(`day and next day`, () => {
      d1 = new Date("January 1, 1995");
      d2 = new Date("January 2, 1995");
      expected = [];
      expect(gap(d1, d2)).toEqual(expected);
    });
    it(`Significant gap`, () => {
      d1 = new Date("July 3, 2017");
      d2 = new Date("July 15, 2017");
      expected = [
        new Date("July 4, 2017"),
        new Date("July 5, 2017"),
        new Date("July 6, 2017"),
        new Date("July 7, 2017"),
        new Date("July 8, 2017"),
        new Date("July 9, 2017"),
        new Date("July 10, 2017"),
        new Date("July 11, 2017"),
        new Date("July 12, 2017"),
        new Date("July 13, 2017"),
        new Date("July 14, 2017")
      ];

      expect(gap(d1, d2)).toEqual(expected);
    });
  });
});
