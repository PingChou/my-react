const supportSymbol = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELMENT_TYPE = supportSymbol
  ? Symbol.for('react.element')
  : 0xeac7;
