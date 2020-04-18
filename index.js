const countryCodes = document.querySelector('#countrycode');
const [...options] = countryCodes.options;

countryCodes.innerHTML = '<option value="+55">Brazil +55</option>';
options
	.slice(1, options.length)
	.map(({ innerHTML, value }) => ({ innerHTML, value }))
	.concat({ innerHTML: 'Brazil +55', value: '+55' })
	.sort(({ innerHTML }, { innerHTML: nextHTML }) => innerHTML.localeCompare(nextHTML))
	.map(({ innerHTML, value }) => Object.assign(document.createElement('option'), { innerHTML, value }))
	.forEach(option => countryCodes.appendChild(option));
