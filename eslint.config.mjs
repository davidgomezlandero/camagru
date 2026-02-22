import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
	// Backend
	{
		files:["backend/**/*.ts"],
		...tseslint.configs.recommended,
		languageOptions: {
			parser: tseslint.parser,
			parseOptions:{
				project: "./backend/tsconfig.json",
			},
			globals: globals.node
		}
	},
	//Frontend
	{
		files:["frontend/**/*.js"],
		...js.configs.recommended,
		languageOptions: {
			globals: globals.browser,
			sourceType: "module",
		},
	},
]);
