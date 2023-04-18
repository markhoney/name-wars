const names = fetch('/names.json');

exports.names = names;
exports.years = (start = 1900, end = 2022) => [...Array(end + 1 - start).keys()].map((index) => index + start);
exports.new = exports.years().reduce((years, year) => {
	years[year] = [];
	for (const name of Object.keys(names)) {
		if (parseInt(Object.keys(names[name])[0]) === year) {
			years[year].push(name);
		}
	}
	return years;
}, {});
exports.androgynous = Object.keys(names).filter((name) => Object.values(names[name]).find((year) => year.M) && Object.values(names[name]).find((year) => year.F));
exports.random = () => names[Math.floor(Math.random() * names.length)];
exports.top = (year, length = 9999) => Object.keys(names).map((name) => ({name, number: (names[name][year]?.M || 0) + (names[name][year]?.F || 0)})).sort((a, b) => b.number - a.number).slice(0, length);
