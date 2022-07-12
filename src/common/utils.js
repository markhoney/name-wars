import nameList from './assets/names.json';

export const names = nameList;
export const years = (start = 1900, end = 2021) => [...Array(end + 1 - start).keys()].map((index) => index + start);
export const random = {get: names[Math.floor(Math.random() * names.length)]};
export const top = (year, length = 9999) => Object.keys(names).map((name) => ({name, number: names[name][year] || 0})).sort((a, b) => b.number - a.number).slice(0, length);
