# Contributing

The following is a set of guidelines for contributing to Ciklum digital organisation packages. Please spend several minutes in reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](https://github.com/ciklum-digital/cra-template-typescript-redux/blob/master/CODE_OF_CONDUCT.md) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work happens directly on [GitHub](https://github.com/ciklum-digital). Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization

There are three types of branch we maintain: `master` `fix/*` `feature/*`.
 
- If you send a Fix Request, please do it in: `fix/short-issue-description`
- If you send a Feature Request, please do it in: `feature/short-feature-description`

## Reporting bugs and questions

We are using [GitHub Issues](https://github.com/ciklum-digital/cra-template-typescript-redux/issues) for bug tracing.

Before you reporting a bug, please make sure you've searched exists issues.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Open a new issue in the [issues tracker](https://github.com/ciklum-digital/cra-template-typescript-redux/issues)
1. Fork the repository and create your branch from [proper branch](#Branch-Organization).
1. Run `yarn` in the repository root.
1. If you've fixed a bug or added code that should be tested, add tests!
1. Ensure the test suite passes (npm run test). Tip: `yarn test` is helpful in development.
1. Ensure the code lints passes. Run `yarn lint lint` for check it.
1. We are using commitizen and commit lint. Use `yarn commit` for prompting commit message window.
1. Submit a pull request, referencing any issues it addresses.

## Development Workflow

After cloning proper module, run `yarn` to fetch its dependencies. Then, you can run several commands:

1. `yarn lint` checks the code style.
1. `yarn test` runs the complete test suite.

## License

By contributing your code to the ciklum-digital GitHub org repositories, you agree to license your contribution under the MIT license.