import { RecoilRoot, useRecoilValue } from 'recoil';
import './App.css';
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notifsAtom,
  totalValue,
} from '../atoms';
import { useMemo } from 'react';

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notifCount = useRecoilValue(notifsAtom);
  const messageCount = useRecoilValue(messageAtom);

  const totalCount = useRecoilValue(totalValue);

  //using usememo -> similar can be acheived using selectors

  const total = useMemo(() => {
    return networkCount + jobsCount + notifCount + messageCount;
  }, [networkCount, jobsCount, notifCount, messageCount]);

  return (
    <>
      <button>Home</button>

      <button>Network ({networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notifCount})</button>

      <button>Me ({totalCount})</button>
      <button>you ({total})</button>
    </>
  );
}

export default App;
