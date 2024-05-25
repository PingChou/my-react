import { REACT_ELMENT_TYPE } from '../../shared/ReactSymbols';
import {
  Ref,
  ElementType,
  Key,
  Props,
  ReactElement,
} from '../../shared/ReactTypes';

const REACTELEMENT = function (
  type: ElementType,
  key: Key,
  ref: Ref,
  props: Props
): ReactElement {
  const _element = {
    $$typeof: REACT_ELMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: 'zippo',
  };
  return _element;
};

export const jsx = function (type: ElementType, config: any) {
  let key: Key = null;
  const props: Props = {};
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];

    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }
      continue;
    }

    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }

    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }
  return REACTELEMENT(type, key, ref, props);
};
export const jsxDEV = jsx;
