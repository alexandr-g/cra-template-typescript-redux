# A quick start Redux Create React App template

An opinionated quick start [Create React App](https://github.com/facebook/create-react-app) (CRA) template with **Redux**, **TypeScript**, **React Router**, **Enzyme** and custom ESlint configuration.

Original Create React App README available [here](./README_CRA.md)

## Usage

`npx create-react-app <your-project_name> --template typescript-redux`

Or

`yarn create react-app <your-project_name> --template typescript-redux`

`npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## Motivation

You know the pain. You start a new project and need to configure it again and again. It needs routing, ok you setup Router, then you need Redux - ok, oh. Wait... All of these tools you get used to. Redux boilerplate is taking some much to type. I want just to focus on building amazing projects and not spending hours configuring tools. That's why I've created this template. It's for you to use.

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

- `yarn lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `yarn fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.

## Redux configuration

Template provides basic Redux configuration with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folder structure. You can use [Redux devtools browser extension](http://extension.remotedev.io/). Sample feature included in `src/features` folder, note technology agnostic `features` folder name. Based on Redux maintainers recommendation.

## Testing

Snapshot testing done with [Enzyme](https://airbnb.io/enzyme/).

## [Prettier](https://prettier.io/)

I added `prettier` to force consistent formatting. Don't like trailing semicolons? Feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside `.prettierrc` file to match your code style.

## Eslint configurations

Template extends CRA eslint rules with custom set, tailored for reasonable and clean development process.

Eslint rules are commented for your convenience feel free to tweak or remove them inside `.eslintrc`. No judgement.

## Thank you

I hope this template will be helpful for you and you will love using it 💖!
