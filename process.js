import {readFileSync, writeFileSync} from 'fs';
import {parse} from 'csv-parse/sync';

const records = parse(readFileSync('baby-names-2021-01-07.csv'), {columns: true, skip_empty_lines: true});

const names = records.reduce((names, record) => {
	if (!names[record.Name]) {
		names[record.Name] = {};
	}
	names[record.Name][parseInt(record.Year)] = parseInt(record.Count);
	return names;
}, {});

writeFileSync('names.json', JSON.stringify(names));
