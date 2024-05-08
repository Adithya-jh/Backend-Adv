import { atom } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 120,
});
export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 1,
});
export const notifsAtom = atom({
  key: 'notifsAtom',
  default: 10,
});
export const messageAtom = atom({
  key: 'messageAtom',
  default: 12,
});
