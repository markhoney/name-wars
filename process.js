import {readFileSync, writeFileSync} from 'fs';
import {parse} from 'csv-parse/sync';

const records = parse(readFileSync('baby-names-2022-01-07.csv'), {columns: true, skip_empty_lines: true});

/* const names = records.reduce((names, record) => {
	if (!names[record.Name]) {
		names[record.Name] = {};
	}
	if (names[record.Name][parseInt(record.Year)]) names[record.Name][parseInt(record.Year)] += parseInt(record.Count);
	else names[record.Name][parseInt(record.Year)] = parseInt(record.Count);
	return names;
}, {}); */

const fix = {
	'Andr�': 'André',
	'Ren�e': 'Renée',
	'Zo�': 'Zoé',
	'Dant�': 'Danté',
	'Rene�': 'Reneé',
	'Am�lie': 'Amélie',
	'Esm�': 'Esmé',
	'K�whai': 'Kōwhai',
	'N�kau': 'Nīkau',
};

const yearList = [];

const names = records.reduce((names, record) => {
	if (!yearList.find((year) => year === parseInt(record.Year))) yearList.push(parseInt(record.Year));
	const name = fix[record.Name] || record.Name;
	if (!names[name]) {
		names[name] = {};
	}
	if (!names[name][parseInt(record.Year)]) names[name][parseInt(record.Year)] = {};
	names[name][parseInt(record.Year)][record.Sex] = parseInt(record.Count);
	return names;
}, {});
writeFileSync('src/assets/names.json', JSON.stringify(names));

const nameArray = Object.entries(names).map(([name, years]) => ({
	name,
	years: yearList.sort().map((year) => ({
		year,
		male: years[year]?.M || 0,
		female: years[year]?.F || 0,
		total: (years[year]?.M || 0) + (years[year]?.F || 0),
	})),
}));
writeFileSync('src/assets/nameArray.json', JSON.stringify(nameArray));

/*
const androgynous = Object.keys(names).filter((name) => Object.values(names[name]).find((year) => year.M) && Object.values(names[name]).find((year) => year.F));
writeFileSync('src/assets/androgynous.json', JSON.stringify(androgynous));
*/

/* const newnames = [...Array(2022 - 1900).keys()].map((index) => index + 1900).reduce((years, year) => {
	years[year] = [];
	for (const name of Object.keys(names)) {
		if (parseInt(Object.keys(names[name])[0]) === year) {
			years[year].push(name);
		}
	}
	return years;
}, {});
writeFileSync('src/assets/newnames.json', JSON.stringify(newnames));

const years = [...Array(2022 - 1900).keys()].map((index) => index + 1900);
const yearnames = records.reduce((names, record) => {
	if (!names[record.Name]) {
		names[record.Name] = {};
	}
	names[record.Name][parseInt(record.Year)] = parseInt(record.Count);
	return names;
}, {});
for (const name of Object.keys(yearnames)) {
	yearnames[name] = years.map((year) => yearnames[name][year] || 0);
}
writeFileSync('src/assets/yearnames.json', JSON.stringify(yearnames));
*/
