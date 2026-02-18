# Notes

## Node
- Create packga.json with a basic structure: npm init -y
- Install dev dependencies: npm instal -D [dependencies]
- Differencen between dev/start/build: dev do not compile files (development), build compiles the files a generate with ts the folder dist/ , start is used for production and it executes the js code that is compiled (uses node dist/index.js)
- When you want to execute a binary locally: npx tsc --init (creates tsconfig.json)
- Jest vs Vitest : jest is slower, has a big ecosystem and you can find it in legacy enterprises and big proyects that were developed a time ago. Vitest is from the vite team, it uses vite motor and is faster that jest, is not difficult to configurate it and the sintaxis is like jest, better performance in moder proyects.
- what is ESlint: it's a linter, it warnings if there are bad praxis, inconsistent style,... It forces you to develope clean code and makes your project better.

## ESLint
- The goal is to make code more consistend and avoid bugs.

## TypeScript
- ts-node: allow to execute ts files with no compile, tsc needs to create js files and later exectues 'node index.js'.
- types/node: ts needs to know what is 'fs, process,...' and this dependency gives this information. It is mandatory if you uses typescript.
