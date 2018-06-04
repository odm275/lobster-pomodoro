export function localStorageSetItems(timers) {
  for (const key of Object.keys(timers)) {
    localStorage.setItem(key, timers[key]);
  }
}

export function localStorageGetItems() {}
