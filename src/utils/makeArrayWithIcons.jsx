import { ICONS_ARRAY } from "../components/Icons";
import { COLORS_LIST } from "../constants/colors";

export const makeArrayWithIcons = () => {
  const colors = getRandomColor();
  const iconsArray = getRandomIcons();
  return iconsArray;
}

export const getRandomIcons = () => {

  const arr = ICONS_ARRAY;

  const min = 2;
  const max = 4;

  const numElements = Math.floor(Math.random() * (max - min + 1)) + min;
  const selectedElements = [];

  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    selectedElements.push(arr[randomIndex]);
  }

  return selectedElements;
}

export const getRandomColor = () => {
  const firstIndex = Math.floor(Math.random() * COLORS_LIST.length);
  let secondIndex;

  do {
    secondIndex = Math.floor(Math.random() * COLORS_LIST.length);
  } while (secondIndex === firstIndex);


  const primary = COLORS_LIST[firstIndex]
  const secondary = COLORS_LIST[secondIndex]

  return { primary, secondary };
}