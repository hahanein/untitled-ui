const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./src/input.css"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({addVariant}) {
			addVariant("pressed", '&[aria-pressed="true"]');
			addVariant("invalid", '&[aria-invalid="true"]');
		}),
	],
};
