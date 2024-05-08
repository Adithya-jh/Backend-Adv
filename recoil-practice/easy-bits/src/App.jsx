import { RecoilRoot, useRecoilValue } from 'recoil';
import './App.css';
import { jobsAtom, messageAtom, networkAtom, notifsAtom } from '../atoms';

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
  return (
    <>
      <button>Home</button>

      <button>Network ({networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notification ({notifCount})</button>

      <button>Me</button>
    </>
  );
}

export default App;
