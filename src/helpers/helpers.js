import moment from "moment";
import 'moment-duration-format';
import Constant from "../const";

export const formatTime = (time, unit, format) => moment.duration(time, unit).format(format, {trim: false});
export const formatDate = (date, format) => moment(date).format(format);
export const increaseBrightness = (hex, percent) => {
  if (!hex) {
    return `#fffff`;
  }
  hex = hex.replace(/^\s*#|\s*$/g, ``);
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, `$1$1`);
  }
  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);
  return `#` +
       ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
};

export const getContrast = function (hexcolor) {
  if (hexcolor.slice(0, 1) === `#`) {
    hexcolor = hexcolor.slice(1);
  }
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? `black` : `white`;
};

export const getRatingDesc = (rating = 0) => Constant.USER_RATINGS.filter(({min}) => min <= rating).pop().title;

