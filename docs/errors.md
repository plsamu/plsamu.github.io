# errors

## internal/modules/cjs/loader.js

1. Add

	"scripts": {
		...
		"next": "next"
	}

2. `npm run next`
   1. `SyntaxError: Unexpected token '??='` === Old node version
   2. install `nvm`
   3. `nvm list; nvm install 18.0.0; nvm use 18.0.0`