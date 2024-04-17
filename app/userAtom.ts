import { atom } from 'recoil';

// Atom for text state
const userAtom = atom({
  key: 'userAtom',
  default: [], // Initial value
});

export default userAtom;
