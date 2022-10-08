const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({addVariant}) {
			addVariant("pressed", '&[aria-pressed="true"]');

			addVariant("x-primary", '&[data-x="primary"]');
			addVariant("x-danger", '&[data-x="danger"]');
			addVariant("x-default", '&[data-x="default"]');
		}),
	],
};
