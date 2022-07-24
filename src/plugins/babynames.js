import names from '../assets/names.json';

export default {
	install: (app, options) => {
		const years = (start = 1900, end = 2021) => [...Array(end + 1 - start).keys()].map((index) => index + start);
		app.config.globalProperties.$names = {
			names,
			new: years().reduce((years, year) => {
				years[year] = [];
				for (const name of Object.keys(names)) {
					if (parseInt(Object.keys(names[name])[0]) === year) {
						years[year].push(name);
					}
				}
				return years;
			}, {}),
			androgynous: Object.keys(names).filter((name) => Object.values(names[name]).find((year) => year.M) && Object.values(names[name]).find((year) => year.F)),
			years,
			random: () => names[Math.floor(Math.random() * names.length)],
			top: (year, length = 9999) => Object.keys(names).map((name) => ({name, number: (names[name][year]?.M || 0) + (names[name][year]?.F || 0)})).sort((a, b) => b.number - a.number).slice(0, length),
			overall: (length = 9999) => Object.keys(names).map((name) => ({name, number: Object.values(names[name]).reduce((sum, year) => sum + (year.M || 0) + (year.F || 0), 0)})).sort((a, b) => b.number - a.number).slice(0, length),
		};
	},
};
