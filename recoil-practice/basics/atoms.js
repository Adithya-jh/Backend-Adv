import { atom, selector } from 'recoil';

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

export const totalValue = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const notifsCount = get(notifsAtom);
    const messageCount = get(messageAtom);

    return networkCount + jobsCount + notifsCount + messageCount;
  },
});
