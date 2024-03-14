import { FONT_SIZE_RANGE } from "constants";

export const getRandomFontSize = () => {
  const [min, max] = FONT_SIZE_RANGE;
  return Number((Math.random() * (max - min + 1) + min).toFixed(1));
}

export const getRandomLeftPos = () => Math.floor(Math.random() * 97 + 1);