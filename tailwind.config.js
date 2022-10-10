const plugin = require("tailwindcss/plugin");
const toColorValue = require("tailwindcss/lib/util/toColorValue").default;
const flattenColorPalette =
	require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./src/input.css"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({addVariant, addUtilities, matchUtilities, theme}) {
			// console.log(theme("colors"));
			addVariant("pressed", '&[aria-pressed="true"]');
			addVariant("invalid", '&[aria-invalid="true"]');
			addVariant("selected", '&[aria-selected="true"]');
			addUtilities({
				".border-inline-end": {"border-inline-end": "solid"},
			});
			matchUtilities(
				{
					"border-inline-end": (colors) => ({
						"border-inline-end-color": toColorValue(colors),
					}),
				},
				{
					values: (({DEFAULT: _, ...colors}) => colors)(
						flattenColorPalette(theme("borderColor"))
					),
					type: "color",
				}
			);
			matchUtilities({
				"border-inline-end": (value) => ({"border-inline-end-width": value}),
				values: theme("borderWidth"),
			});
		}),
	],
};
