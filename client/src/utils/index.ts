import { FONT_SIZE_RANGE } from "constants";

export const getRandomFontSize = () => {
  const [min, max] = FONT_SIZE_RANGE;
  return Number((Math.random() * (max - min + 1) + min).toFixed(1));
}

export const getRandomLeftPos = () => Math.floor(Math.random() * 97 + 1);

/* UUID ref: https://stackoverflow.com/a/6860916 */
export const uuid = () => {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}