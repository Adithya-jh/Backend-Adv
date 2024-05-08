import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  // const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  //we dont want to do fetch in here -> its not efficient
  // useEffect(() => {
  //   // fetch
  //   axios.get('https://sum-server.100xdevs.com/notifications').then((res) => {
  //     setNetworkCount(res.data);
  //   });
  // }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? '99+' : networkCount.networks})
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
