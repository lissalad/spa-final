const CHARACTERS_STATE = "CHARACTERS_STATE";

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(CHARACTERS_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CHARACTERS_STATE, serializedState);
  } catch (err) {
    console.log("Error saving data:" + err);
  }
};
