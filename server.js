const faker = require('faker')
const fs = require("fs");

const generateDataEn = (number) => {
	faker.locale = 'en_US'
	const persons = [];
	while (number >= 0) {
		persons.push({
			id: number,
			name: faker.name.findName(),
			city: faker.address.cityName(),
			street: faker.address.streetName(),
			secondary: faker.address.secondaryAddress(),
			address: faker.address.streetAddress(),
			phone: faker.phone.phoneNumberFormat(),
		});
		number--;
	}
	return persons;
};
const generateDataRu = (number) => {
	faker.locale = 'ru'
	const persons = [];
	while (number >= 0) {
		persons.push({
			id: number,
			name: faker.name.findName(),
			city: faker.address.cityName(),
			street: faker.address.streetName(),
			secondary: faker.address.secondaryAddress(),
			address: faker.address.streetAddress(),
			phone: faker.phone.phoneNumberFormat(),
		});
		number--;
	}
	return persons;
};
const generateDataUk = (number) => {
	faker.locale = 'uk'
	const persons = [];
	while (number >= 0) {
		persons.push({
			id: number,
			name: faker.name.findName(),
			city: faker.address.cityName(),
			street: faker.address.streetName(),
			secondary: faker.address.secondaryAddress(),
			address: faker.address.streetAddress(),
			phone: faker.phone.phoneNumberFormat(),
		});
		number--;
	}
	return persons;
};

fs.writeFileSync(
	"./db.json",
	JSON.stringify({ en: generateDataEn(1000), ru: generateDataRu(1000), uk: generateDataUk(1000) })
);


console.log(generateDataRu(0));
