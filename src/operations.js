export default {
  add: {
    symbol: '+',
    f: (a, b) => a + b,
  },
  subtract: {
    symbol: '-',
    f: (a, b) => a - b,
  },
  multiply: {
    symbol: '\u{00D7}',
    f: (a, b) => a * b,
  },
  divide: {
    symbol: '\u{00F7}',
    f: (a, b) => b === 0 ? 'undefined' : a / b,
  }
};
