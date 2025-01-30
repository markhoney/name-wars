import names from '../assets/names.json';

const years = {
	first: 1900,
	last: 2024,
};

const yearList = (first = years.first, last = years.last) => [...Array(last + 1 - first).keys()].map((index) => index + first);
const titleCase = (name) => name.trim().slice(0, 1).toUpperCase() + name.trim().slice(1).toLowerCase();
const total = (year) => year ? (year?.M || 0) + (year?.F || 0) : 0;
const colours = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#008080', '#9a6324', '#800000', '#808000', '#000075', '#808080']; // , '#fffac8', '#e6beff', '#fabebe', '#aaffc3', '#ffd8b1'

export default {
	install: (app) => {
		app.config.globalProperties.$names = {
			years: yearList,
			names,
			get nameArray() {
				return Object.entries(names).map(([name, years]) => ({
					name,
					years: yearList.sort().map((year) => ({
						year,
						male: years[year]?.M || 0,
						female: years[year]?.F || 0,
						total: (years[year]?.M || 0) + (years[year]?.F || 0),
					})),
				}));
			},
			new: yearList().reduce((years, year) => {
				years[year] = [];
				for (const name of Object.keys(names)) {
					if (parseInt(Object.keys(names[name])[0]) === year) {
						years[year].push(name);
					}
				}
				return years;
			}, {}),
			valid(nameList) {
				if (!nameList || !nameList.length) return false;
				if (typeof nameList === 'string') return Object.keys(names).includes(titleCase(nameList)) ? titleCase(nameList) : '';
				return Object.keys(names).filter((name) => nameList.includes(name.toLowerCase()));
				// return nameList.filter((name) => Object.keys(names).includes(titleCase(name)));
			},
			stats(name, first, last) {
				const years = yearList(first, last);
				const data = years.map((year) => ({year, total: total(names[name][year])}));
				const highest = data.reduce((highest, year) => (year.total > highest.total ? year : highest), {year: 0, total: 0});
				last = years[this.years.length - 1];
				const stats = {
					data,
					seen: {
						first: Object.keys(names[name])[0],
						last: Object.keys(names[name])[Object.keys(names[name]).length - 1],
					},
					number: {
						total: data.reduce((total, year) => total + year.total, 0),
						highest: {
							year: highest.year,
							number: highest.total,
						},
						first: {
							year: data[0].year,
							number: data[0].total,
						},
						last: {
							year: data[data.length - 1].year,
							number: data[data.length - 1].total,
						},
					},
					ranking: {
						overall: this.overall.findIndex((name) => name.name === name) + 1,
						last: this.top(last).findIndex((name) => name.name === name) + 1,
						previous: this.top(last - 1).findIndex((name) => name.name === name) + 1,
					},
				};
				if (stats.number.last > stats.number.previous) {
					stats.number.direction = 'a rise';
				} else if (stats.number.last < stats.number.previous) {
					stats.number.direction = 'a fall';
				} else {
					stats.number.direction = 'no change';
				}
				stats.ranking.change = Math.abs(stats.ranking.last - stats.ranking.previous);
				if (stats.ranking.last > stats.ranking.previous) {
					ranking.direction = 'a rise';
				} else if (stats.ranking.last < stats.ranking.previous) {
					stats.ranking.direction = 'a fall';
				} else {
					stats.ranking.direction = 'no change';
				}
				return stats;
			},
			popular(first, last) {
				return yearList(first, last).map((year) => {
					const popular = {year, name: '', number: 0};
					for (const name of Object.keys(names)) {
						for (const sex of ['M', 'F']) {
							if ((names[name][year]?.[sex] || 0) > popular.number) {
								popular.name = name;
								popular.number = names[name][year][sex];
							}
						}
					}
					return popular;
				});
			},
			total,
			androgynous: Object.keys(names).filter((name) => Object.values(names[name]).find((year) => year.M) && Object.values(names[name]).find((year) => year.F)),
			get random() {return names[Math.floor(Math.random() * names.length)];},
			top: (year) => Object.keys(names).map((name) => ({name, number: (names[name][year]?.M || 0) + (names[name][year]?.F || 0)})).sort((a, b) => b.number - a.number),
			toop: (first, last) => {
				if (!first) {
					first = years.first;
					last = years.last;
				} else if (!last) {
					last = first;
				}
				return Object.keys(names).map((name) => ({name, number: (names[name][year]?.M || 0) + (names[name][year]?.F || 0)})).sort((a, b) => b.number - a.number)
			},
			get overall() {return Object.keys(names).map((name) => ({name, number: Object.values(names[name]).reduce((sum, year) => sum + (year.M || 0) + (year.F || 0), 0)})).sort((a, b) => b.number - a.number);},
			ordinal: (number) => {
				const s = ["th", "st", "nd", "rd"];
				const v = number % 100;
				return number.toLocaleString() + (s[(v - 20) % 10] || s[v] || s[0]);
			},
			case: titleCase,
			colours,
			get randomColour() {return colours[Math.floor(Math.random() * colours.length)];},
		};
	},
};
