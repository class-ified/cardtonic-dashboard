import {useState} from 'react';


export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const handlers = {
    on: () => {
      setState(true);
    },
    off: () => {
      setState(false);
    },
    toggle: () => {
      setState(s => !s);
    },
    reset: () => {
      setState(initialState);
    },
    _set: s => {
      setState(s);
    },
  };

  return [state, handlers];
};
