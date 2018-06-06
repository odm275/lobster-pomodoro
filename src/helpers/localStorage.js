export function localStorageGetItems() {
  if (localStorage.length === 0) {
    // Set user as true in localstorage
    console.log("defaultSettings!");
    const defaultSettings = {
      pomodoro: "25",
      shortBreak: "5",
      longBreak: "10"
    };
    setDefaultSettings(defaultSettings);
    return defaultSettings;
  }
  console.log("userSettings!");

  const userSettings = getUserSettings();
  return userSettings;
}
export function localStorageSetItems(settings) {
  for (const key of Object.keys(settings)) {
    localStorage.setItem(key, settings[key]);
  }
}

function setDefaultSettings(defaultSettings) {
  for (const key of Object.keys(defaultSettings)) {
    localStorage.setItem(key, defaultSettings[key]);
  }
}

function getUserSettings() {
  //  Get settings from loca Storage.
  //  Turn into an object and return.
  return Object.keys(localStorage).reduce((obj, str) => {
    obj[str] = localStorage.getItem(str);
    return obj;
  }, {});
}
