import {readFileSync, writeFileSync} from 'fs';
import {parse} from 'csv-parse/sync';

const records = parse(readFileSync('baby-names-2022-01-07.csv'), {columns: true, skip_empty_lines: true});

const names = records.reduce((names, record) => {
	if (!names[record.Name]) {
		names[record.Name] = {};
	}
	names[record.Name][parseInt(record.Year)] = parseInt(record.Count);
	return names;
}, {});

writeFileSync('names.json', JSON.stringify(names));

const years = [...Array(2021 - 1900).keys()].map((index) => index + 1900);
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

writeFileSync('yearnames.json', JSON.stringify(yearnames));
