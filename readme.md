
# Jest

Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue and more.

## Features

- **Zero Configuration**: Works out of the box for any JavaScript project
- **Instant Feedback**: Fast test execution with a built-in test runner
- **Snapshot Testing**: Capture snapshots of your component output
- **Great Assertions**: Comprehensive matchers for testing
- **Code Coverage**: Built-in coverage reports
- **Mocking**: Easy mocking of modules and functions

## Getting started - Initialization
Initialize a Node project
``` bash
npm init --y
```

## Installation
Jest is used only in development - Therefore install it as a dev dependency
```bash
npm install --save-dev jest
```
OR
```bash
npm install -D jest
```

## Quick Start

Add to your `package.json`:

```json
{
    "scripts": {
        "test": "jest",
        "testWithCoverage": "jest --coverage",
        "testWithWatch": "jest --watchAll"
    }
}
```

Create a test file `sum.test.js`:

```javascript
function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

Run tests:

```bash
npm test # Run all tests
```
```bash
npm run testWithCoverage # Run all tests. Creates coverage on what functions were tested and what was left out. Creates a index.html file to visualize coverage
```
```bash
npm run testWithWatch # Run all tests automatically when we make changes on any file
```

## Documentation

Visit [jestjs.io](https://jestjs.io) for complete documentation.

## License

MIT
