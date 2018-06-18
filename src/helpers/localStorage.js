export function localStorageGetItems() {
  if (localStorage.length === 0) {
    // Set user as true in localstorage
    //  Default settings
    const defaultems = {
      pomodoro: "25",
      shortBreak: "5",
      longBreak: "10",
      pomodoroCount: "",
      shortBreakCount: "",
      longBreakCount: ""
    };
    setDefaultItems(defaultems);
    return defaultems;
  }
  // Stablished user settings
  const userItems = getUserItems();
  return userItems;
}
export function localStorageSetItems(items) {
  for (const key of Object.keys(items)) {
    localStorage.setItem(key, items[key]);
  }
}

function setDefaultItems(defaultItems) {
  for (const key of Object.keys(defaultItems)) {
    localStorage.setItem(key, defaultItems[key]);
  }
}

function getUserItems() {
  //  Get settings from loca Storage.
  //  Turn into an object and return.
  return Object.keys(localStorage).reduce((obj, str) => {
    obj[str] = localStorage.getItem(str);
    return obj;
  }, {});
}
